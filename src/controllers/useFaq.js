import { useState } from 'react'

export function useFaq(initialOpenId = 1) {
  const [openId, setOpenId] = useState(initialOpenId)

  function toggle(id) {
    setOpenId(prev => (prev === id ? null : id))
  }

  return { openId, toggle }
}
