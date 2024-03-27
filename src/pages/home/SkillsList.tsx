interface SkillsListProps {
  skills: string[]
  keyPrefix?: string
}

export default function SkillsList({ skills, keyPrefix = "main" }: SkillsListProps) {
  return (
    <>
      {skills.map((skill, i) => {
        return (
          <p key={`${keyPrefix}-skill-${skill}-${i}`}>{skill}</p>
        );
      })}    
    </>
  )
}