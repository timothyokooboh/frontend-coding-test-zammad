import Swal from 'sweetalert2'

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
})

// eslint-disable-next-line import/prefer-default-export
export const Notify = (params: {
  icon: 'success' | 'error' | 'info' | 'warning' | 'question'
  title: string
}) => {
  Toast.fire({
    icon: params.icon,
    title: params.title,
  })
}
