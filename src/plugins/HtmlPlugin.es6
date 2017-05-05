/*
 * (c) Copyright 2016 STI eXtrem Using技术小组
 * http://www.stixu.com
 */
import $ from 'jquery'

export default {

    /**
     * 安装
     */
        install (Vue, options) {
        	
        	/**
             * 添加required指令，根据参数自动添加上下文指令
             */
            Vue.directive('required', {
                
                bind (el, binding, vnode) {
                    let value = binding.value
                    $(el).prop('required', !!value)
                },

                update (el, binding) {
                    let value = binding.value;
                    $(el).prop('required', !!value)
                }

            })

            /**
             * 添加disabled指令，根据参数自动添加上下文指令
             */
            Vue.directive('disabled', {
                
                bind (el, binding, vnode) {
                    let value = binding.value
                    $(el).prop('disabled', !!value)
                },

                update (el, binding) {
                    let value = binding.value;
                    $(el).prop('disabled', !!value)
                }

            })

            /**
             * 添加readonly指令，根据参数自动添加上下文指令
             */
            Vue.directive('readonly', {
                
                bind (el, binding, vnode) {
                    let value = binding.value
                    $(el).prop('required', !!value)
                },

                update (el, binding) {
                    let value = binding.value;
                    $(el).prop('readonly', !!value)
                }

            })
     }
}