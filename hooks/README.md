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

`useApi`

- Hooks sử dụng để gọi api
- Sử dụng được với REST
- Tham số:
  - baseURL: là đường dẫn chính để sử dụng, kết hợp với các entry point để gọi api tương ứng
- Return là một Promise => có thể dử dujg async/await
- Có thể tùy chỉnh Header => thêm được bearer, token, . . .
- Use:
  **import hooks**

```javascript
import useApi from "hooks";
```

**Set Header**

```javascript
const { _header, _delete, get, put, post, patch } = useApi(
  "https://sampleAPi/api/v1"
);
_header(token);
```

**get method**

```javascript
async function fetchUsers() {
  const res = await get("/user");
  //Hanlde response
  console.log(res);
}

//Fetch wiht id
async function
async function fetchUser(id) {
  const res = await get(`/user/${id}`);
  //Hanlde response
  console.log(res);
}
```

**post method** (tương tự với cả patch và put)

```javascript

const data = {
  username:"cquan";
  name:"Quan";
}

async function AddUsers(data) {
  const res = await post("/user"); //Có thể thay thế là put hoặc patch
  //Hanlde response
  console.log(res);
}
```

**Multiple api calling**

```javascript
//Trong trường hợp cần gọi nhiều api ta có thể sử dụng Promise.all

async function fetchStudent() {
  return await get("/student");
}

async function fetchTeacher() {
  return await get("/teacher");
}

Promise.all([fetchStudent(), fetchTeacher()]).then((results) => {
  const student = results[0];
  const teacher = results[1];
});
```
