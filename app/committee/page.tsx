import PageHeader from "@/components/PageHeader";
import { committeeMembers } from "@/data/committee";
import { clubInfo } from "@/data/club";
import Image from "next/image";

export const metadata = {
  title: `Committee | ${clubInfo.name}`,
  description: "Meet the dedicated individuals who lead and manage S.T.S Club.",
};

export default function CommitteePage() {
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .substring(0, 2)
      .toUpperCase();
  };

  // Hierarchy structure
  const president = committeeMembers.find(m => m.category === "President");
  const vicePresident = committeeMembers.find(m => m.category === "Vice President");
  const generalSecretary = committeeMembers.find(m => m.category === "General Secretary");
  
  const categories = [
    { title: "Assistant Secretaries", members: committeeMembers.filter(m => m.category === "Assistant Secretary") },
    { title: "Treasurers", members: committeeMembers.filter(m => m.category === "Treasurer") },
    { title: "Cultural Secretary", members: committeeMembers.filter(m => m.category === "Cultural Secretary") },
    { title: "Assistant Cultural Secretaries", members: committeeMembers.filter(m => m.category === "Assistant Cultural Secretary") },
    { title: "Game Secretary", members: committeeMembers.filter(m => m.category === "Game Secretary") },
    { title: "Assistant Game Secretaries", members: committeeMembers.filter(m => m.category === "Assistant Game Secretary") },
    { title: "Members", members: committeeMembers.filter(m => m.category === "Member") },
  ];

  const MemberCard = ({ member, featured = false }: { member: any, featured?: boolean }) => (
    <div className={`flex flex-col items-center p-6 bg-white rounded-sm shadow-sm border border-neutral-100 hover:shadow-md transition-shadow ${featured ? 'md:p-10 border-gold/30' : ''}`}>
      <div className={`relative mb-6 rounded-full overflow-hidden bg-primary-dark/5 flex items-center justify-center ${featured ? 'w-40 h-40 md:w-48 md:h-48' : 'w-32 h-32'}`}>
        {member.image ? (
          <Image src={member.image} alt={member.name} fill className="object-cover" />
        ) : (
          <span className={`font-heading font-bold text-primary-dark/30 ${featured ? 'text-5xl' : 'text-4xl'}`}>
            {getInitials(member.name)}
          </span>
        )}
      </div>
      <h3 className={`font-heading font-bold text-primary-dark text-center ${featured ? 'text-2xl md:text-3xl mb-2' : 'text-xl mb-1'}`}>
        {member.name}
      </h3>
      <p className={`text-gold font-medium text-center uppercase tracking-wider ${featured ? 'text-sm md:text-base' : 'text-xs'}`}>
        {member.role}
      </p>
    </div>
  );

  return (
    <>
      <PageHeader 
        title="Our Committee" 
        description="The dedicated team ensuring the smooth operation and continued legacy of the club."
        imageSrc="/gallery/WhatsApp Image 2026-09-25 at 19.06.32.jpeg"
      />
      <section className="py-24 bg-neutral-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          
          {/* Top Leadership */}
          <div className="max-w-5xl mx-auto mb-20">
            {president && (
              <div className="flex justify-center mb-12 md:mb-16">
                <div className="w-full md:w-2/3 lg:w-1/2">
                  <MemberCard member={president} featured={true} />
                </div>
              </div>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {vicePresident && <MemberCard member={vicePresident} featured={true} />}
              {generalSecretary && <MemberCard member={generalSecretary} featured={true} />}
            </div>
          </div>

          {/* Other Categories */}
          {categories.map((category) => (
            category.members.length > 0 && (
              <div key={category.title} className="max-w-6xl mx-auto mb-16">
                <div className="text-center mb-10">
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-dark inline-block relative">
                    {category.title}
                    <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 h-1 bg-gold rounded-full"></span>
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.members.map((member) => (
                    <MemberCard key={member.name} member={member} />
                  ))}
                </div>
              </div>
            )
          ))}

        </div>
      </section>
    </>
  );
}
