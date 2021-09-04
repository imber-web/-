import Exception from '@/components/Exception';

export default function Forbidden() {
  return (
    <Exception
      statusCode="403"
      image="https://img.alicdn.com/tfs/TB11TaSopY7gK0jSZKzXXaikpXa-200-200.png"
      description="你没有权限进行该操作，请看看其他的吧"
    />
  )
}