`useEventListener`

- Detect các event được hỗ trợ sẵn javascript
- Đã bao gồm AddEventListener và RemoveListener
- Tham số:
  - Name event
  - Callback handle
- Use:

```javascript

useEventListener(<name event>,<callback>)
//Example
useEventListener("click",e=>console.log(e.target))

```

`useWindowSize`

- Return size cảu window hiện tại
- Tự động thay đổi khi resize
- Use:

```javascript
const { width, height } = useWindowSize();
```

`useClickOutside`

- Ẩn hiện Modal
- Tham số:
  - Ref cho modal
  - Callback handle
- Use

```javascript
const modal = useRef()
useClickOutside(modal,e=>setOpen(false))
<div ref={modal} >Modal</div>
```
