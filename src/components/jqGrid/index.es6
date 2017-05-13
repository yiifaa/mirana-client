import $ from 'jquery'
import Vue from 'vue'

import QueryService from 'services/QueryService.es6'

//  注意它们的加载顺序，必须先加载国际化文件
import 'jqGrid/js/i18n/grid.locale-cn'
//  覆盖定义
import 'jqGrid/js/jquery.jqGrid'
import 'jqGrid/css/ui.jqgrid-bootstrap.css'
import template from './jqGrid.html'
import subTemplate from './subGrid.html'
import './jqGrid.less'

//	设置样式
$.jgrid.defaults.styleUI = 'Bootstrap'
$.jgrid.styleUI.Bootstrap.base.rowTable = "table table-bordered table-striped"
$.jgrid.styleUI.Bootstrap.common.icon_base = "fa"
$.jgrid.styleUI.Bootstrap.base.icon_first = "fa-fast-backward"
$.jgrid.styleUI.Bootstrap.base.icon_prev = "fa-backward"
$.jgrid.styleUI.Bootstrap.base.icon_next = "fa-forward"
$.jgrid.styleUI.Bootstrap.base.icon_end = "fa-fast-forward"
$.jgrid.styleUI.Bootstrap.base.icon_asc = "fa-sort-asc"
$.jgrid.styleUI.Bootstrap.base.icon_desc = "fa-sort-desc"
$.jgrid.styleUI.Bootstrap.base.icon_caption_open = "fa-arrow-up"
$.jgrid.styleUI.Bootstrap.base.icon_caption_close = "fa-arrow-down"

$.jgrid.styleUI.Bootstrap.subgrid = {
    icon_plus : 'fa fa-chevron-right',
    icon_minus : 'fa fa-chevron-down',
    icon_open : 'fa fa-chevron-left'
}

let SubGrid = Vue.extend({

	template : subTemplate,

	data () {
		return {
			item : []
		}
	}
})

let jqGrid = {
    
    template,
    
    props: {
        
        /**
		 * 在解析之前调用
		 */
		beforeRender : {
			type : Function,
			required : false
		},

        
        /**
         *  在发送请求之前调用
         */
		beforeRequest: {
			type: Function,
			required : false
		},
        
        /**
		 *    由于Vue的特性，无法确定子元素的数量，用于确定数据列
		 */
		colSize : {
			type : Number,
			default : 1
		},
        
        /**
         *
         */
        encode : {
			type : Boolean,
			default : false
		},
        
        /**
         *  表格高度
         */
        height : {
			type : String,
			default : 'auto'
		},
        
        /**
		 * 标识每行数据的惟一性，如果不能准确标识，则数据选择出错
		 */
		idField : {
			type : String,
			default : 'id'
		},
        
        /**
		 * 表格DOM元素的ID，用于区别其他表格
		 */
		id : {
			type : String,
			default : function() {
				let random = (Math.random() + '').substr(-4),
					time = (Date.now().valueOf() + '').substr(-4)
				return 'STI_GRID_' +  random + '_' + time
			}
		},
        
        /**
		 * 提交的方式
		 */
		method : {
			type : String,
			default : 'GET'
		},
        
        /**
		 * 多选相关
		 */
		multiSelect: {
			type : Boolean,
			default : false
		},

        /**
         *
         */
		multiboxonly: {
			type : Boolean,
			default : false
		},

        /**
         *
         */
		multiFilter: {
			type : Function,
			default : function(id, data) {
				return true
			}
		},
        
        /**
		 * 子表展开式的函数
		 */
		onExpand : {
			type : Function
		},

		afterExpand : {
			type : Function,
			default : function() {
				return $.noop
			}
		},

		onCollapse : {
			type : Function
		},


		afterCollapse : {
			type : Function,
			default : function() {
				return $.noop
			}	
		},
        
        /**
         *  点击单元格时触发
         */
		onCellClick : {
			type : Function,
            required: false
		},
        
        /**
		 * 表格载入完成后触发
		 */
		onReady : {
			type : Function,
            required: false
		},
        
        /**
		 * 选中每行时触发
		 */
		onRowClick : {
			type : Function,
            required: false
		},
        
        /**
         *  选中全部记录时触发
         */
        onSelectAll : {
			type : Function,
            required: false
		},
        
        /**
		 * 请求的参数
		 */
		prmNames: {
			type : Object
		},
        
        /**
		 * 配置是否分页
		 */
		pagable : {
			type : Boolean,
			default : true
		},
        
        /**
         *  分页数量
         */
        pageSize : {
			type : Number,
			default : 10
		},
        
        /**
		 * 返回的查询参数
		 */
		query : {
			type : Function,
            required: false,
            default () {
                return function() {
					return {}
				}
            }
		},

        
        /**
		 * 是否排序
		 */
		sortable : {
			type : Boolean,
			default : false
		},
        
        /**
		 * 排序的字段名称
		 */
		sortField : {
			type : String,
			default : function() {
				return this.idField
			}
		},
        
        /**
		 * 排序的方式
		 */
		sortAsc : {
			type : Boolean,
			default : true
		},
        
        /**
		 * 是否显示
		 */
		subGrid : {
			type : Boolean,
			default : false
		},
        
        /**
		 * 请求的数据地址
		 */
		url : {
			type : String
		},
        
        width: {
            type: Number,
            default: -1
        }
    },
    
    created () {
        //	设置标记,用于子元素识别
		this.tagName = 'JQ_GRID'
        //  用于统计子元素的数量
		this.readySize = 0
    },
    
    
    data () {
        return {
            colModel : []
        }
    },
    
    computed : {

        /**
         * 分页组件的DOM id
         */
		pagerId () {
			return this.id + '_PAGER'
		},

        /**
         *  排序的方向
         */
		sortDir () {
			return this.sortAsc ? 'asc' : 'desc'
		}
    },
    
    methods: {
        
        /**
		 * 默认的配置选项
		 */
		defaults () {
			let height = this.height,
                defaults = {
                    height,
                    styleUI : 'Bootstrap',
                    emptyrecords : "暂时没有数据",
                    //  width: 1200,
                    shrinkToFit : true,
                    cellLayout : 10,
                    altRows : false, //是否间隔显示记录
                    hoverrows : true,//是否激活Hover事件
                    loadonce : false,
                    multiselect: this.multiSelect,
                    multiboxonly: this.multiboxonly
                }
            if(this.width > 0) {
                defaults.width = this.width
            } else {
                defaults.autowidth = true
            }
			return defaults
		},
        
        /**
         *  添加数据列
         */
        addColModel () {
            this.readySize ++
			if(this.readySize == this.colSize) {
				let children = this.$children
				this.$children.forEach( item => {
					if(item.tagName === 'JQ_COL') {
						this.colModel.push(item.define)
					}
				})
                //  由于Vue无法确定子元素的加载顺序，必须手动指定order
				this.colModel.sort((a, b) => a.order - b.order)
                //  渲染表格,必须等DOM加载后执行
				this.$nextTick(() => this.render())
			}
        },
        
        /**
         * 渲染表格
         */
        render () {
            let options = this.defaults()
            this.view = $("#" + this.id, this.$el)
            //	配置分页
			this._buildPager(options)
			this._buildSorter(options)
			this._buildUrl(options)
            this._buildQuery(options)
			this._buildTemplate(options)
            this._buildEvents(options)
            this._buildSubGrid(options)
            //	配置数据
			Object.assign(options, {
				colModel : this.colModel
			})
            //  最后一次修改表格配置的机会
			if($.type(this.beforeRender) == 'function') {
				options = this.beforeRender(this.view, options)
			}
            this.view.jqGrid(options)
        },
          
        /**
         * 绑定表格事件
         */
        _buildEvents (options) {
            let self = this
            //
			if($.type(this.onCellClick) === 'function') {
				Object.assign(options, {
					onCellSelect : this.onCellClick
				})
			}
            //
			if($.type(this.onRowClick) === 'function') {
				Object.assign(options, {
					onSelectRow : this.onRowClick
				})
			}
            //
            if($.type(this.onReady) === 'function') {
				Object.assign(options, {
					gridComplete : function(){
						self.onReady()
					}
				})
			}
            //
            if($.type(this.beforeRequest) === 'function') {
				Object.assign(options, {
					beforeRequest : function() {
						self.beforeRequest(this)
					}
				})
			}
            //
			if($.type(this.onSelectAll) === 'function') {
				Object.assign(options, {
					onSelectAll : function() {
						self.onSelectAll(this)
					}
				})
			}
        },
        
        /**
         *  
         * 构建分页组件
         */
        _buildPager (options) {
            if(this.pagable) {
				Object.assign(options, {
					pgbuttons : true,//是否显示
					rowNum : this.pageSize,//每页的数量
					rownumWidth : 30,
					pginput : true,//是否可以输入页码
					viewrecords: true,//是否显示记录条数
					rowList:[10, 15, 30, 50, 100, 200],
					toppager : false,	//是否在表格顶部也显示分页构件
					pager: "#" + this.pagerId
				})
				if(this.prmNames == undefined){
					//	查询参数信息
					Object.assign(options, {
						prmNames : {
                            //  当前页数
							page : "currPage",
                            //  每页数量
							rows : "pageSize",
                            // 排序字段
							sort : "sortColumn",
                            // 排序方向
							order : "order"
						}
					})
				} else {
					Object.assign(options, {
						prmNames : this.prmNames
					});
				}
			}
        },
        
        /**
         *  创建查询参数
         */
        _buildQuery (options) {
				let self = this
				Object.assign(options, {
					autoencode : this.encode,//转义服务器传送的数据，将HTML片段转义为普通字符串
					mtype: this.method,//数据的请求方式
					serializeGridData : function(postData) {
						let queryObj = QueryService.buildSearchForm(self.query())
						return Object.assign(postData, queryObj);
					}
				})
		},    
            
        /**
         * 
         * 构建排序组件
         */
        _buildSorter (options) {
			let sortable = this.sortable
			if(this.sortable) {
				let sortname = this.sortField,
					sortorder = this.sortDir
				Object.assign(options, {
					sortable,
					sortorder,
					sortname
				})
			}
		},
        
        /**
		 * 初始化子表格
		 */
		_buildSubGrid (options) {
            let self = this
			//	开启函数
			let onExpand = (rowId, rowKey) => {
					//	避免出现特殊的字符，如空格等
					let viewCont = document.getElementById(rowId),
						rowData = this.getRowData(rowKey),
						items = []
					this.colModel.forEach(col => {
						if(col.detail) {
							let name = col['label'],
								value = rowData[col.name],
                                detail = col['detail']
							items.push({
								name, value, detail
							})
						}
					})
					let self = this
					new SubGrid({
						replace : false,
						parent : this,
						data : {
							items : items
						},
						ready () {
							self.afterExpand(this.$el, viewCont, rowKey)
						}
					}).$mount(viewCont)
				},
				//	关闭函数
				onCollapse = (rowId, rowKey) => {
					let viewCont = document.getElementById(rowId),
						idMatcher = rowId.match(/[\[\]:. ]/);
					//	出现了特殊字符，必须删除
					if(idMatcher && idMatcher.length > -1) {
						let viewRow = viewCont.parentElement.parentElement
						viewRow.remove(true)
					}
					this.afterCollapse(viewCont, rowId, rowKey)
					return true
				}
			//
			if(!!this.onExpand) {
				onExpand = this.onExpand
			}
			//
			if(!!this.onCollapse) {
				onCollapse = this.onCollapse
			}
			//
			if(this.subGrid) {
				Object.assign(options, {
					rownumWidth: 35,
					subGrid : true,
					subGridWidth : 20,
					subGridOptions : {
						openicon : "",
						delayOnLoad : 50,
						expandOnLoad: false, //在加载父表时就展开子表,并录入子表的数据
						selectOnExpand : false, //选中就会载载入数据
						reloadOnExpand : false //每次展开都会重新加载数据
					},
					subGridRowExpanded : onExpand,
					subGridRowColapsed : onCollapse
				})
			}
		},

        
        /**
         * 构建URL组件
         */
        _buildUrl (options) {
            let url = this.url
            Object.assign(options, {
					datatype: "json",
                jsonReader : {
                    //  存放记录位置
                    root : "results",
                    //  当前页数
                    page : "currPage",
                    total : "pages",    // 所有的页数
                    records : "count", // 所有的记录数
                    id : this.idField,
                    repeatitems : true//设置此元素为true,将会容许出现重复元素,但是重复的元素无法同时选中
                },
                loadComplete : this.onLoad
            })
            if(!!url) {
                Object.assign(options, {
                    url
                })
            }
        },
            
            
        /**
		 *  构建列数据模板
		 */
		_buildTemplate (options) {
			let sortable = this.sortable
			Object.assign(options, {
				cmTemplate : {
					sortable,
			    	resizable : true,
			    	title : false,
			    	fixed : false,
			    	editable : false,//是否可编辑
			    	align : "left"
			    }
			})
		},
        
        resizeGridWidth (width){
			this.view.jqGrid('setGridWidth', width, true);
		},

		/**
		 * @function 获取当前选中行,只有启用了multiSelect时才有效,返回所有选中行的id
		 * @return 获取所有选中行的id,以数组形式
		 */
		getSelected : function() {

			if(this.multiSelect) {
				return this.view.jqGrid('getGridParam', "selarrrow");
			} else {
				return this.getFocus();
			}
		},

		/**
		 * @function 获取当前焦点所在的行的id
		 */
		getFocus : function() {
			return this.view.jqGrid('getGridParam', "selrow");
		},
        
        /**
		 * 重新提交查询,刷新当前列表
		 * @isBack 是否需要返回到第一页
		 * @function 重新提交查询,刷新当前列表
		 */
		reload (isBack) {
			this.view.trigger("reloadGrid")
		},
        
        /**
		 * @function 根据id获取当前行数据
		 * @param id 当前所在行的id
		 * @return 以数组方式返回id所代表行的数据
		 */
		getRowData (id) {
			if(Array.isArray(this.datas)){
				return  this.view.jqGrid('getLocalRow',id);
			} else {
				return  this.view.jqGrid('getRowData',id);
			}
			//return  this.view.jqGrid('getRowData',id);
		},

		/**
		 * 获取原始数据
		 * @param  {[type]} id [description]
		 * @return {[type]}    [description]
		 */
		getRawData (id) {
			if(Array.isArray(this.datas)){
				return  this.datas.filter(data => data[this.idField] == id)
			} else {
				return  this.rawDataSet.filter(data => data[this.idField] == id)
			}
		},

		/**
		 * 返回DOM对象
		 */
		getView () {
			return this.view
		},

		getCell (id, icol){
			return this.view.jqGrid('getCell', id, icol)
		},

		getAllData (){
			return this.urlData
		}
    },
    
    /**
     * 加载DOM
     */
    mounted () {
        //  alert(this.$el.offsetWidth)
        //  alert($('#aFluid').innerWidth())
    }
    
}

let jqCol = {
    
    template: `<span style="display:none;"><slot></slot></span>`,

	props : {

		/**
		 * 对齐的方式
		 */
		align : {
			type : String,
			default : 'left'
		},

		/**
		 * 此列是否可隐藏与显示
		 */
		choosable : {
			type : Boolean,
			default : true
		},

		/**
		 * 显示的标题
		 */
		label : {
			type : String,
			required : true
		},

		/**
		 * 从数据列里取的名称
		 */
		name : {
			type : String,
			required : true
		},
		
		index : {
			type : String,
			default : function() {
				return this.name
			}
		},

		order : {
			type : Number,
			default : 0
		},

		/**
		 * 宽度
		 */
		width : {
			type : Number
		},

		/**
		 * 是否支持排序
		 */
		sortable : {
			type : Boolean,
			default : true
		},

		/**
		 * 是否显示在明细中
		 *
		 */
		detail : {
			type : Boolean,
			default : true
		},

		/**
		 * 是否显示显示
		 */
		hidden : {
			type : Boolean,
			default : false
		},

		/**
		 * 支持JQGrid的内置格式化器
		 */
		formatter : [String, Function],
		
		fmtOptions : [Object, String],
		
		/**
		 * 在formatter之后调用
		 */
		domFormatter : {
			type : Function
		}
	},

	computed : {

		define () {
			return {
				choosable : this.choosable,
				shown : !this.hidden,
				detail : this.detail,
				hidden : this.hidden,
				align : this.align,
				formatter : this.formatter,
				index : this.index,
				name : this.name,
				order : this.order,
				label : this.label,
				sortable : this.sortable,
				width : this.width,
				unformat : this.domFormatter
			}
		}

	},
	
	/**
	 * 
	 */
	created () {
		this.tagName = 'JQ_COL'
		if(this.$parent.tagName !== 'JQ_GRID') {
			throw new Error('parent must be JQ_GRID!')
		}		
	},
    
    mounted () {
        let html = this.$el.innerHTML
        if(!!html && html.length > 1) {
            let str = 'return \`' + html + '\`',
                func = new Function('value', 'row', str)
            this.formatter = function(value, row) {                
                //  返回结果，融入值与本行的值
                let result = func(value, row)
                return result
            }
        }
        this.$parent.addColModel()
    }
	
}

export {jqGrid, jqCol}
