import template from './edit.html'
import { validator, validRule } from 'plugins/validator.es6'

export default {
    
    template,
    
    data () {
        return {
            disabled : true
        }    
    },
    
    components: {
        validator,
        validRule
    },
    
    methods: {
        save () {
            let validator = this.$refs.validator
            if(validator.valid()) {
                alert('submit')    
            }
        }
    }
    
}