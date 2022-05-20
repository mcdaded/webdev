# Using Vue in Markdown

## Browser API Access Restrictions

Because VuePress applications are server-rendered in Node.js when generating static builds, any Vue usage must conform to the [universal code requirements](https://ssr.vuejs.org/en/universal.html). In short, make sure to only access Browser / DOM APIs in `beforeMount` or `mounted` hooks.

If you are using or demoing components that are not SSR friendly (for example containing custom directives), you can wrap them inside the built-in `<ClientOnly>` component:

## Another title

```python
import pandas as pd
import numpy as np

data = pd.DataFrame(data=np.arange(10))
data.head()
```

It's easy to do some of this stuff!

```html
<div>
  <h1>This is the title</h1>
</div>
```

It's as easy as that


## Final title

Will this work? Probably not but lets see!