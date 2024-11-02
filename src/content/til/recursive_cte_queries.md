---
published: true
title: "Recursive CTE queries"
date: 2021-08-24
tags: ["database"]
---
These are useful for tables that have columns like `id` and `parent_id` which
are recursive by nature. Also known as a parent child relationship. Here's an
example in sqlite:

```sql
.headers on

with recursive cte (id, parent_id, name) as (
  select id, parent_id, name
  from module
  where id = 'a1d5d11609b0d207f94f34ce9747ceb6'

  union all

  select m.id, m.parent_id, m.name
  from module m
  join cte c on m.id = c.parent_id
)

select id, name from cte;
```

