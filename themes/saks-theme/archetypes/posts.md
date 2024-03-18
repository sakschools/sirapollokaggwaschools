---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
thumbnail: "/img/posts/{{ .Name | lower | urlize }}.webp"
---
