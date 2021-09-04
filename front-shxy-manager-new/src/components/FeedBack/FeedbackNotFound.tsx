import Exception from '@/components/Exception';

export default function NotFound() {
  return (
    <Exception
      statusCode="404"
      image="https://img.alicdn.com/tfs/TB11TaSopY7gK0jSZKzXXaikpXa-200-200.png"
      description="你访问的页面或接口没有找到"
    />
  )
}