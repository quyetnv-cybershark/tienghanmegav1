## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

---

## **Git flow**

### Main branches:

- **master**: Nhánh chứa mã nguồn sản phẩm ổn định (được merge từ develop và hotfix branches).
- **develop**: Nhánh chứa các tính năng mới và các sửa đổi được merge từ các feature branch.

### Supporting branches:

- **feature branches**: Nhánh để phát triển một tính năng cụ thể. Sau khi hoàn thành, sẽ merge vào develop.
- **hotfix branches**: Nhánh để fix lỗi trên master và sau đó merge vào master và từ master merge ngược vào develop.

## **Commit conventional**

- Mỗi commit nên chỉ thực hiện một thay đổi logic hoặc một tính năng cụ thể.
- Định dạng commit: _Tiêu đề(type): Thân(subject)_

### Phần tiêu đề:

- **feat**: Sử dụng khi bạn thêm một tính năng mới.
  Ví dụ: feat: add user login functionality
- **fix**: Sử dụng khi bạn sửa một lỗi.
  Ví dụ: fix: correct issue with user authentication
- **docs**: Sử dụng khi bạn thay đổi tài liệu.
  Ví dụ: docs: update README with new setup instructions
- **style**: Sử dụng khi bạn thay đổi phong cách mã nguồn (không ảnh hưởng đến logic).
  Ví dụ: style: format code with prettier
- **refactor**: Sử dụng khi bạn tái cấu trúc mã nguồn mà không thêm tính năng mới hoặc sửa lỗi.
  Ví dụ: refactor: improve performance of data fetching
- **perf**: Sử dụng khi bạn cải thiện hiệu suất.
  Ví dụ: perf: reduce API response time
- **test**: Sử dụng khi bạn thêm hoặc sửa các bài kiểm tra.
  Ví dụ: test: add unit tests for user service
- **build**: Sử dụng khi bạn thay đổi cấu hình build hoặc thêm dependency.
  Ví dụ: build: update webpack configuration
- **chore**: Sử dụng cho các công việc vặt không ảnh hưởng đến sản phẩm cuối cùng (như cập nhật các công cụ build, dependency, v.v.).
  Ví dụ: chore: add commitlint dependency
- **ci**: Sử dụng khi bạn thay đổi cấu hình CI.
  Ví dụ: ci: update CircleCI configuration
- **revert**: Sử dụng khi bạn muốn quay lại một commit trước đó.
  Ví dụ: revert: revert commit abc1234
