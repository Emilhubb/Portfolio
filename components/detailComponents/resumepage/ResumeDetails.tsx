import React from 'react'
import EducationContext from './EducationContent'
import ExperienceContent from './ExperienceContent'
import TechStackContext from './SkillsContent'
import CertificatesSection from './CertificatesContent'
import ReferencesContent from './ReferencesContent'

const ResumeDetails = () => {
  return (
    <div>
      <EducationContext/>
      <ExperienceContent/>
      <TechStackContext/>
      <CertificatesSection/>
      <ReferencesContent/>
    </div>
  )
}

export default ResumeDetails
