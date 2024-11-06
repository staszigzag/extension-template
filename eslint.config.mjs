import antfu from '@antfu/eslint-config'

export default antfu(
  {
    rules: {
      'no-alert': 'warn',
      'no-console': 'warn',
      'unused-imports/no-unused-vars': 'warn',
    //   'no-restricted-globals': 'warn',
    //   'perfectionist/sort-imports': 'off',
    //   'import/order': 'warn',
    //   '@typescript-eslint/ban-ts-comment': 'warn',
    //   '@typescript-eslint/explicit-function-return-type': 'off',
    //   'vue/multi-word-component-names': 'warn',
    //   '@eslint-community/eslint-comments/no-unlimited-disable': 'off',
    //   'ts/explicit-function-return-type': 'off',
    },
  },
)
