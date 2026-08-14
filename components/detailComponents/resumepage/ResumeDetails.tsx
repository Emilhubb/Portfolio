import React from 'react'
import EducationContext from './EducationContent'
import ExperienceContent from './ExperienceContent'
import TechStackContext from './SkillsContent'
import CertificatesSection from './CertificatesContent'
import ReferencesContent from './ReferencesContent'
import DownloadCVContent from './DownloadCVContent'

const ResumeDetails = () => {
  return (
    <div>
      <EducationContext/>
      <ExperienceContent/>
      <TechStackContext/>
      <CertificatesSection/>
      <ReferencesContent/>
      <DownloadCVContent/>
    </div>
  )
}

export default ResumeDetails
