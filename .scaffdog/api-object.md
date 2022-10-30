---
name: 'api-object'
root: 'src/lib/cms/api'
output: '.'
ignore: []
questions:
  value: 'Please enter any text.'
---

# `{{ inputs.value }}/index.ts`

```javascript
import { ContentQuery, EndPoints } from 'src/lib/cms/types/response'

export type Methods = {
  get: {
    query?: ContentQuery
    resBody: EndPoints['get']['{{ inputs.value }}']
  }
}
```
