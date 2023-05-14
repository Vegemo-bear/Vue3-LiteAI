import { getAll } from '@/api/menus'
import type { MenuItem } from '@/api/menus'
import { deleteMenu } from '@/api/menus'

export function useMenus() {
  const allMenus = ref([] as MenuItem[])
  const getAllMenus = async () => {
    const { data } = await getAll()
    if (data.code === '000000') {
      allMenus.value = data.data
    } else {
      ElMessage.error('获取用户菜单信息失败!')
      throw new Error('获取用户菜单信息失败!')
    }
  }

  const handleDelete = async (id: string) => {
    await ElMessageBox.confirm('确认要删除该用户信息吗？', '删除提醒', {
      confirmButtonText: '确定',
      cancelButtonText: '取消'
    }).catch(() => {
      ElMessage.info('删除操作被取消!')
      return new Promise(() => {})
    })

    const { data } = await deleteMenu(id)

    if (data.code === '000000') {
      ElMessage.success('删除用户信息成功!')
      getAllMenus()
    } else {
      ElMessage.error('删除用户信息失败!')
      throw new Error('删除用户信息失败!')
    }
  }
  return { allMenus, getAllMenus, handleDelete }
}
