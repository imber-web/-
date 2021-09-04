import Exception from '@/components/Exception';

export default function ServerError() {
  return (
    <Exception
      statusCode="500"
      image="https://img.alicdn.com/tfs/TB11TaSopY7gK0jSZKzXXaikpXa-200-200.png"
      description="服务器出错了，休息一下吧"
    />
  )
}