import React from 'react'
import EducationContext from './EducationContent'
import ExperienceContent from './ExperienceContent'
import TechStackContext from './SkillsContent'
import CertificatesSection from './CertificatesContent'

const ResumeDetails = () => {
  return (
    <div>
      <EducationContext/>
      <ExperienceContent/>
      <TechStackContext/>
      <CertificatesSection/>
    </div>
  )
}

export default ResumeDetails
