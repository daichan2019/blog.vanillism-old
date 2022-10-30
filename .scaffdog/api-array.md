---
name: 'api-array'
root: 'src/lib/cms/api'
output: '.'
ignore: []
questions:
  value: 'Please enter any text.'
---

# `{{ inputs.value }}/index.ts`

```javascript
import { ContentsQuery, EndPoints } from 'src/lib/cms/types'

export type Methods = {
  get: {
    query?: ContentsQuery
    resBody: EndPoints['gets']['{{ inputs.value }}']
  }
}
```

# `{{ inputs.value }}/_id@string/index.ts`

```javascript
import { ContentQuery, EndPoints } from 'src/lib/cms/types'

export type Methods = {
  get: {
    query?: ContentQuery
    resBody: EndPoints['get']['{{ inputs.value }}']
  }
}
```
