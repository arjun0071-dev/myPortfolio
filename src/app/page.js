import { About, } from '@/component/home/About'
import { Timelinee } from '@/component/home/Eduction'
import Herosection from '@/component/home/Herosection'
import Project from '@/component/home/Project'
import Skill from '@/component/home/Skill'
// import { Skill } from '@/component/home/Skill'

import Testimonials from '@/component/home/Testimonials'


import React from 'react'

function page() {
  return (
    <div>
      <Herosection />
      <About />
    <Skill/>
      <Testimonials />
      <Project />
      <Timelinee/>
    </div>
  )
}

export default page