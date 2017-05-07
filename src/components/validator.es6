import $ from 'jquery'
import 'jquery-validation/dist/jquery.validate'
import 'jquery-validation/dist/additional-methods'
import 'jquery-validation/dist/localization/messages_zh'

let template = '<div class="sti-validator"><slot></slot></div>'

const validator = {
    
    template,
    
    props : {
		/**
		 *
		 */
		ruleSize : {
			type : Number,
			default : 0
		},
		
		form : {
			type : String,
			required : true
		},
		
		debug : {
			type : Boolean,
			default : false
		}
		
	},
	
	data () {
		return {
			rules : {},
			messages : {}
		}
	},
    
    /**
     * 加载后完成
     */
    mounted () {
		if(this.ruleSize == 0 ) {
			this.validate()
		}
	},
    
    /**
	 * 设置验证规则
	 */
	created () {
		this.tagName = 'VALIDATOR'
	},
    
    methods: {
        
        addRule (fieldName, name, rule, message) {
            if(!!this.rules[fieldName]) {
                this.rules[fieldName][name] = rule
            } else {
				if(!!rule) {
					this.rules[fieldName] = {[name]: rule}
				}
            }
            //  判断是否有提示信息
            if(!!message) {
                if(!!this.messages[fieldName]) {
                    this.messages[fieldName][name] = message
                } else {
                    this.messages[fieldName] = {[name] : message}
                }
            }
			if(Object.keys(this.rules).length === this.ruleSize) {
				this.validate()
			}
		},
        
        addMessage (fieldName, name, message) {
			this.messages[fieldName] = {[name] : message}
		},
        
        /**
		 * 默认的校验配置
		 */
		defaults () {
            const FIELD_CLS = '.sti-form-field',
                  FIELD_GRP = '.sti-form-group'
            //  配置信息
			return {
				debug : this.debug,
				ignore : ':hidden, .ignore',
				errorElement : 'label',
				errorClass : 'sti-error',
				validClass : '',				
				errorPlacement : function(error, element) {
					let field = element.parents(FIELD_CLS),
						formGroup = field.parents(FIELD_GRP),
						validEl = formGroup.find('.sti-validator-rule')
					//	添加错误提示样式
					error.addClass('control-label')
					//	如果存在验证容器
					if(validEl.length > 0) {
						validEl.append(error)
					} else {
						field.append(error)
					}
					formGroup.addClass('has-error')
				},
				
				success : function(error) {
					let field = error.parents(FIELD_CLS),
						formGroup = field.parents(FIELD_GRP)
					formGroup.removeClass('has-error')
					error.remove()
					//	formGroup.addClass('has-success')
				}
			}
		},
        
        /**
		 * 校验数据验证是否通过
		 */
		valid () {
			return $(this.form).valid()
		},
        
        /**
		 *	这算是初始化吗？ 
		 */
		validate () {
			let rules = this.rules,
				messages = this.messages,
				validOptions = this.defaults(),
				options = Object.assign(validOptions, {rules, messages})
			$(this.form).validate(options)
		}
    }
}

const ruleTemplate = '<div class="sti-validator-rule"></div>'
const validRule = {
	
	template: ruleTemplate,
	
	props : {
		
		validFor : {
			type : String,
			required : true
		},
        
        name : {
            type : String,
            required : true
        },
		
		params : [String, Object, Function],
		
		message : [String, Object, Function]
		
	},
	
	mounted () {
		let parent = this.$parent
		if(parent.tagName === 'VALIDATOR') {
			let rule = {},
				message = {}
			//	添加规则
			if(!!this.name) {
                let params = !this.params ? true : this.params
				parent.addRule(this.validFor, this.name, params, this.message)
			}
		} else {
			throw Error('parent must be validator')
		}
	}
	
}

export { validator, validRule }