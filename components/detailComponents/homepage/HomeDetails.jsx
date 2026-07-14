import { CanvasText } from '@/components/ui/canvas-text'
import React from 'react'
import { CanvasTextDemo } from './effects/CanvasText'

const HomeDetails = () => {
  return (
    <div className='bg-transparent backdrop-blur-[10px]'>
      <CanvasTextDemo/>
    </div>
  )
}

export default HomeDetails