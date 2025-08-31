// File: src/components/about/AgentSection.tsx

import Avatar from '@/components/ui/Avatar';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { agents } from '@/data/agents';
import { Briefcase, Mail, Phone, Star } from 'lucide-react';

const AgentSection = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 border-[#D4AF37] text-[#D4AF37] bg-[#D4AF37]/10">
            הכירו את הצוות
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent">
            המומחים שילוו אתכם
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {agents.map((agent) => (
            <Card key={agent.id} variant="elevated" className="overflow-hidden group bg-[#1a1a1a] border border-[#D4AF37]/20 hover:border-[#D4AF37]/40">
              {/* Header with gradient background */}
              <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] p-8">
                <div className="flex flex-col items-center">
                  {/* Avatar with gradient border */}
                  <Avatar
                    src={agent.image}
                    alt={agent.name}
                    size="2xl"
                    border
                    gradient
                    className="mb-4 border-[#D4AF37]"
                  />

                  {/* Name and Title */}
                  <h3 className="text-2xl font-bold text-[#FFD700] mb-2">
                    {agent.name}
                  </h3>
                  <Badge variant="primary" className="mb-4 bg-[#D4AF37]/20 text-[#D4AF37] border-[#D4AF37]/30">
                    {agent.title}
                  </Badge>

                  {/* Contact Buttons */}
                  <div className="flex gap-3">
                    <a href={`tel:${agent.phone}`}>
                      <Button 
                        variant="primary" 
                        size="sm" 
                        icon={Phone}
                        className="bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-black hover:from-[#FFD700] hover:to-[#D4AF37]"
                      >
                        {agent.phone}
                      </Button>
                    </a>
                    <a href={`mailto:${agent.email}`}>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        icon={Mail}
                        className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black"
                      >
                        אימייל
                      </Button>
                    </a>
                  </div>
                </div>
              </div>

              {/* Stats Bar */}
              <div className="bg-[#0a0a0a] border-t border-b border-[#D4AF37]/20 px-8 py-4">
                <div className="grid grid-cols-3 divide-x divide-[#D4AF37]/20">
                  <div className="text-center px-2">
                    <div className="text-xl font-bold text-[#FFD700]">
                      {agent.achievements.propertiesSold}+
                    </div>
                    <div className="text-xs text-[#D4AF37]">נכסים</div>
                  </div>
                  <div className="text-center px-2">
                    <div className="text-xl font-bold text-[#FFD700]">
                      {agent.achievements.satisfactionRate}%
                    </div>
                    <div className="text-xs text-[#D4AF37]">שביעות רצון</div>
                  </div>
                  <div className="text-center px-2">
                    <div className="text-xl font-bold text-[#FFD700]">
                      {agent.yearsOfExperience}+
                    </div>
                    <div className="text-xs text-[#D4AF37]">שנות ניסיון</div>
                  </div>
                </div>
              </div>

              <CardContent className="p-8">
                {/* Bio */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {agent.bio[0]}
                </p>

                {/* Specialties */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Briefcase className="w-4 h-4 text-[#D4AF37]" />
                    <h4 className="font-semibold text-[#D4AF37]">תחומי התמחות</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {agent.specialties.map((specialty, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        icon={Star}
                        size="sm"
                        className="border-[#D4AF37]/30 text-[#D4AF37] bg-[#D4AF37]/10"
                      >
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgentSection;