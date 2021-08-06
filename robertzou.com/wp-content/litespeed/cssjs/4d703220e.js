!function(){"use strict";window.kadenceForm={error_item:1,clearForm(e){e.reset()},insertAfter(e,r){r.parentNode.insertBefore(e,r.nextSibling)},markError(e,r,a){var t="";if(a.classList.contains("kb-form-has-error")||a.classList.add("kb-form-has-error"),e.classList.add("has-error"),r){switch(r){case"required":(t=e.getAttribute("data-required-message"))&&""!==t&&void 0!==t||((t=e.getAttribute("data-label"))&&""!==t&&void 0!==t||(t=kadence_blocks_form_params.item),t=t+" "+kadence_blocks_form_params[r]);break;case"mismatch":(t=e.getAttribute("data-mismatch-message"))&&""!==t&&void 0!==t||((t=e.getAttribute("data-label"))&&""!==t&&void 0!==t||(t=kadence_blocks_form_params.item),t=t+" "+kadence_blocks_form_params[r]);break;case"validation":(t=e.getAttribute("data-validation-message"))&&""!==t&&void 0!==t||((t=e.getAttribute("data-label"))&&""!==t&&void 0!==t||(t=kadence_blocks_form_params.item),t=t+" "+kadence_blocks_form_params[r])}var o=e.parentNode.querySelector(".kb-form-error-msg");o&&o.remove();var i=e.getAttribute("name")+"-error";e.setAttribute("aria-describedby",i),e.setAttribute("aria-invalid","true");var d=document.createElement("div");d.id=i,d.classList.add("kb-form-error-msg"),d.classList.add("kadence-blocks-form-warning"),d.setAttribute("role","alert"),d.innerHTML=t,e.classList.contains("kb-checkbox-style")?e.parentNode.append(d):window.kadenceForm.insertAfter(d,e)}1===window.kadenceForm.error_item&&e.focus(),window.kadenceForm.error_item++},addErrorNotice(e){var r=e.getAttribute("data-error-message");r&&""!==r&&void 0!==r||(r=kadence_blocks_form_params.error_message);var a=document.createElement("div");a.classList.add("kadence-blocks-form-message"),a.classList.add("kadence-blocks-form-warning"),a.innerHTML=r,window.kadenceForm.insertAfter(a,e)},isValidEmail:e=>new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i).test(e),isValidURL:e=>new RegExp("^(http://www.|https://www.|ftp://www.|www.|http://|https://){1}([0-9A-Za-z]+.)").test(e),isValidTel:e=>new RegExp("/^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$/im").test(e),removeErrors(e){e.classList.contains("kb-form-has-error")&&e.classList.remove("kb-form-has-error");var r=e.querySelectorAll(".has-error");if(r.length)for(var a=0;a<r.length;a++){r[a].classList.remove("has-error"),r[a].removeAttribute("aria-describedby"),r[a].removeAttribute("aria-invalid");var t=r[a].parentNode.querySelector(".kb-form-error-msg");t&&t.remove()}var o=document.querySelectorAll(".kadence-blocks-form-message");if(o.length)for(a=0;a<o.length;a++)o[a].remove();var i=e.querySelectorAll(".kb-form-errors");if(i.length)for(a=0;a<i.length;a++)i[a].remove()},serialize(e){var r={};for(var[a,t]of e)void 0!==r[a]?(Array.isArray(r[a])||(r[a]=[r[a]]),r[a].push(t)):r[a]=t;return r},validateForm(e){var r=!1,a="";window.kadenceForm.removeErrors(e);var t=e.querySelectorAll('[data-required="yes"]');if(t.length)for(var o=0;o<t.length;o++){var i="";switch(t[o].getAttribute("data-type")){case"textarea":case"text":case"tel":""===(i=t[o].value.trim())&&(r=!0,a="required",window.kadenceForm.markError(t[o],a,e));break;case"accept":0==t[o].checked&&(r=!0,a="required",console.log("here"),window.kadenceForm.markError(t[o],a,e));break;case"select":i=t[o].value,t[o].multiple?null!==i&&0!==i.length||(r=!0,a="required",window.kadenceForm.markError(t[o],a,e)):i&&"-1"!==i||(r=!0,a="required",window.kadenceForm.markError(t[o],a,e));break;case"radio":case"checkbox":t[o].querySelector("input:checked")||(r=!0,a="required",window.kadenceForm.markError(t[o],a,e));break;case"email":""!==(i=t[o].value.trim())?window.kadenceForm.isValidEmail(i)||(r=!0,a="validation",window.kadenceForm.markError(t[o],a,e)):""===i&&(r=!0,a="required",window.kadenceForm.markError(t[o],a,e));break;case"url":""!==(i=t[o].value.trim())?window.kadenceForm.isValidURL(i)||(r=!0,a="validation",window.kadenceForm.markError(t[o],a,e)):""===i&&(r=!0,a="required",window.kadenceForm.markError(t[o],a,e))}}if(r)return window.kadenceForm.addErrorNotice(e),!1;var d=new FormData(e);return d.set("_kb_form_verify",kadence_blocks_form_params.nonce),d=new URLSearchParams(d)},createElementFromHTML(e){var r=document.createElement("div");return r.innerHTML=e,r.firstChild},submit(e,r){e.preventDefault();var a=new Event("kb-form-start-submit");window.document.body.dispatchEvent(a);var t=r.querySelector(".kb-forms-submit"),o=window.kadenceForm.validateForm(r);if(o){var i=document.createElement("div");i.classList.add("kb-form-loading"),i.innerHTML='<div class="kb-form-loading-spin"><div></div><div></div><div></div><div></div></div>',r.append(i),t.setAttribute("disabled","disabled"),t.classList.add("button-primary-disabled");var d=new XMLHttpRequest;d.open("POST",kadence_blocks_form_params.ajaxurl,!0),d.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),d.onload=function(){if(this.status>=200&&this.status<400){var e=JSON.parse(this.response);if(e.success){var a=new Event("kb-form-success",{formID:r.id});window.document.body.dispatchEvent(a),e.redirect?window.location=e.redirect:(window.kadenceForm.insertAfter(window.kadenceForm.createElementFromHTML(e.html),r),r.querySelector(".g-recaptcha")&&grecaptcha.reset(),window.kadenceForm.clearForm(r))}else e.data&&(window.kadenceForm.insertAfter(window.kadenceForm.createElementFromHTML(e.data.html),r),e.data.required&&r.querySelector('[name="'+e.data.required+'"]')&&window.kadenceForm.markError(r.querySelector('[name="'+e.data.required+'"]'),"required",r))}r.querySelector(".g-recaptcha")&&grecaptcha.reset(),t.removeAttribute("disabled"),t.classList.remove("button-primary-disabled"),r.querySelector(".kb-form-loading").remove()},d.onerror=function(){console.log("Connection error")},d.send(o.toString())}},initForms(){var e=document.querySelectorAll("form.kb-form");if(e.length)for(var r=function(e){return function(r){window.kadenceForm.submit(r,e)}},a=0;a<e.length;a++)e[a].addEventListener("submit",r(e[a]))},init:function(){if("undefined"==typeof kadence_blocks_form_params)return!1;window.kadenceForm.initForms()}},"loading"===document.readyState?document.addEventListener("DOMContentLoaded",window.kadenceForm.init):window.kadenceForm.init()}();
;