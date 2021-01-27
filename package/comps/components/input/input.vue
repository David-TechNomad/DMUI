<template>
    <div class="dm__input">
        <input ref="input" v-if="type == 'text'" type="text"
                   v-model="currentValue" :name="name" @focus="onFocus" @blur="onBlur" :maxlength="max" :placeholder="placeholder" :autocomplete="autocomplete" :readonly="readonly" :disabled="disabled" :class="[{'is-right': right}]"
        >
        <input ref="input" v-if="type == 'search'" type="search"
                   v-model="currentValue" :name="name" @focus="onFocus" @blur="onBlur" :maxlength="max" :placeholder="placeholder" :autocomplete="autocomplete" :readonly="readonly" :disabled="disabled" :class="[{'is-right': right}]"
        >
        <input ref="input" v-if="type == 'password'" type="password"
                       v-model="currentValue" :name="name" @focus="onFocus" @blur="onBlur" :maxlength="max" :placeholder="placeholder" :autocomplete="autocomplete" :readonly="readonly" :disabled="disabled" :class="[{'is-right': right}]"
        >
        <input ref="input" v-if="type == 'number'" type="number"
                   v-model="currentValue" :name="name" @focus="onFocus" @blur="onBlur" :maxlength="max" :placeholder="placeholder" :autocomplete="autocomplete" :readonly="readonly" :disabled="disabled" :class="[{'is-right': right}]"
        >
        <input ref="input" v-if="type == 'email'" type="email"
                   v-model="currentValue" :name="name" @focus="onFocus" @blur="onBlur" :maxlength="max" :placeholder="placeholder" :autocomplete="autocomplete" :readonly="readonly" :disabled="disabled" :class="[{'is-right': right}]"
        >
        <input ref="input" v-if="type == 'tel'" type="tel" pattern="[0-9]*"
                   v-model="currentValue" :name="name" @focus="onFocus" @blur="onBlur" maxlength="11" :placeholder="placeholder" :autocomplete="autocomplete" :readonly="readonly" :disabled="disabled" :class="[{'is-right': right}]"
        >
        <input ref="input" v-if="type == 'datetime-local'" type="datetime-local"
                   v-model="currentValue" :name="name" @focus="onFocus" @blur="onBlur" :maxlength="max" :placeholder="placeholder" :autocomplete="autocomplete" :readonly="readonly" :disabled="disabled" :class="[{'is-right': right}]"
        >
        <input ref="input" v-if="type == 'date'" type="date"
                   v-model="currentValue" :name="name" @focus="onFocus" @blur="onBlur" :maxlength="max" :placeholder="placeholder" :autocomplete="autocomplete" :readonly="readonly" :disabled="disabled" :class="[{'is-right': right}]"
        >
        <input ref="input" v-if="type == 'time'" type="time"
                   v-model="currentValue" :name="name" @focus="onFocus" @blur="onBlur" :maxlength="max" :placeholder="placeholder" :autocomplete="autocomplete" :readonly="readonly" :disabled="disabled" :class="[{'is-right': right}]"
        >
        <div class="dm__input--close" v-if="hasClose&&(type == 'text'||type == 'search'||type == 'password'||type == 'email'||type == 'tel')&&!disabled&&!readonly" v-show="currentValue!=''" @click="emptyVal"><span class="dm__icon--close-outline"></span></div>
        <!-- 前置内容 -->
        <span class="dm-input__prefix" v-if="$slots.prefix || prefixIcon">
          <slot name="prefix"></slot>
          <i class="dm-input__icon"
            v-if="prefixIcon"
            :class="prefixIcon">
          </i>
        </span>
      <!-- 后置内容 -->
      <!-- <span
        class="dm-input__suffix"
        v-if="getSuffixVisible()">
        <span class="dm-input__suffix-inner">
          <template v-if="!showClear || !showPwdVisible || !isWordLimitVisible">
            <slot name="suffix"></slot>
            <i class="dm-input__icon"
              v-if="suffixIcon"
              :class="suffixIcon">
            </i>
          </template>
          <i v-if="showClear"
            class="dm__input--close"
            @mousedown.prevent
            @click="clear"
          ></i>
          <i v-if="showPwdVisible"
            class="dm-input__icon dm-icon-view dm-input__clear"
            @click="handlePasswordVisible"
          ></i>
        </span>
        <i class="dm-input__icon"
          v-if="validateState"
          :class="['dm-input__validateIcon', validateIcon]">
        </i>
      </span> -->
    </div>
</template>

<script>
// input属性还需要不断完善 2017/12/20
export default {
  name: 'dm-input',
  inject: {
    elForm: {
      default: ''
    },
    elFormItem: {
      default: ''
    }
  },
  props: {
    name: String,
    placeholder: String,
    value: [String, Number],
    readonly: Boolean,
    disabled: Boolean,
    prefixIcon: String,
    suffixIcon: String,
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    },
    autocomplete: {
      type: String,
      default: 'off'
    },
    type: {
      type: String,
      default: 'text'
    },
    max: {
      validator (val) {
        return /^\d*$/.test(val)
      }
    },
    right: {
      type: Boolean,
      default: false
    },
    hasClose: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      currentValue: this.value,
      passwordVisible: false
    }
  },
  watch: {
    value (val) {
      this.currentValue = val
    },
    currentValue (val) {
      this.$emit('input', val)
    }
  },
  methods: {
    onBlur (event) {
      this.$emit('blur', event.target.value)
    },
    onFocus () {
      this.$emit('focus')
    },
    clear() {
      this.$emit('input', '');
      this.$emit('change', '');
      this.$emit('clear');
    },
    validateState() {
      return this.elFormItem ? this.elFormItem.validateState : '';
    },
    needStatusIcon() {
      return this.elForm ? this.elForm.statusIcon : false;
    },
    validateIcon() {
      return {
        validating: 'dm-icon-loading',
        success: 'dm-icon-circle-check',
        error: 'dm-icon-circle-close'
      }[this.validateState];
    },
    upperLimit() {
      return this.$attrs.maxlength;
    },
    getInput() {
      return this.$refs.input || this.$refs.textarea;
    },
    emptyVal () {
      this.currentValue = ''
    },
    handlePasswordVisible() {
      this.passwordVisible = !this.passwordVisible;
      this.focus();
    },
    focus() {
      this.getInput().focus();
    },
    blur() {
      this.getInput().blur();
    },
    textLength() {
      if (typeof this.value === 'number') {
        return String(this.value).length;
      }

      return (this.value || '').length;
    },
    inputExceed() {
      // show exceed style if length of initial value greater then maxlength
      return this.isWordLimitVisible &&
        (this.textLength > this.upperLimit);
    },
    showClear() {
      return this.clearable &&
        !this.inputDisabled &&
        !this.readonly &&
        this.nativeInputValue &&
        (this.focused || this.hovering);
    },
    showPwdVisible() {
        return this.showPassword &&
          !this.inputDisabled &&
          !this.readonly &&
          (!!this.nativeInputValue || this.focused);
      },
      isWordLimitVisible() {
        return this.showWordLimit &&
          this.$attrs.maxlength &&
          (this.type === 'text' || this.type === 'textarea') &&
          !this.inputDisabled &&
          !this.readonly &&
          !this.showPassword;
      },
    getSuffixVisible() {
        return this.$slots.suffix ||
          this.suffixIcon ||
          this.showClear ||
          this.showPassword ||
          this.isWordLimitVisible ||
          (this.validateState && this.needStatusIcon);
    },
  }
}
</script>

<style scoped lang="scss">

</style>
