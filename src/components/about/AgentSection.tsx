import Avatar from '@/components/ui/Avatar';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { agents } from '@/data/agents';
import { Briefcase, Mail, Phone, Star } from 'lucide-react';

const AgentSection = () => {
  return (
    <section className="relative py-20 lg:py-32">
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <Badge variant="solid" className="mb-4 animate-fade-in" glow>
            הכירו את הצוות
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 animate-slide-up">
            <span className="text-white">המומחים שילוו </span>
            <span className="bg-gradient-to-r from-primary-500 to-primary-400 bg-clip-text text-transparent">
              אתכם
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {agents.map((agent, index) => (
            <Card 
              key={agent.id} 
              variant="luxury" 
              hover 
              className="overflow-hidden group animate-slide-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Header with gradient background */}
              <div className="relative bg-gradient-to-br from-dark-950 via-dark-900 to-black p-8">
                {/* Gold accent gradient */}
                <div className="absolute inset-0 bg-gradient-radial from-primary-500/10 to-transparent opacity-50" />
                
                <div className="relative flex flex-col items-center">
                  {/* Avatar with gold border */}
                  <div className="relative mb-4">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-300" />
                    <Avatar
                      src={agent.image}
                      alt={agent.name}
                      size="2xl"
                      className="relative border-2 border-primary-500/50"
                    />
                  </div>

                  {/* Name and Title */}
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {agent.name}
                  </h3>
                  <Badge variant="solid" className="mb-6" glow>
                    {agent.title}
                  </Badge>

                  {/* Contact Buttons */}
                  <div className="flex gap-3">
                    <a href={`tel:${agent.phone}`}>
                      <Button variant="primary" size="sm" icon={Phone}>
                        {agent.phone}
                      </Button>
                    </a>
                    <a href={`mailto:${agent.email}`}>
                      <Button variant="secondary" size="sm" icon={Mail}>
                        אימייל
                      </Button>
                    </a>
                  </div>
                </div>
              </div>

              {/* Stats Bar with Gold Theme */}
              <div className="bg-gradient-to-r from-dark-950 via-primary-500/10 to-dark-950 px-8 py-4 border-y border-dark-800">
                <div className="grid grid-cols-3 divide-x divide-dark-700">
                  <div className="text-center px-2">
                    <div className="text-xl font-bold bg-gradient-to-r from-primary-500 to-primary-400 bg-clip-text text-transparent">
                      {agent.achievements.propertiesSold}+
                    </div>
                    <div className="text-xs text-dark-400">נכסים</div>
                  </div>
                  <div className="text-center px-2">
                    <div className="text-xl font-bold bg-gradient-to-r from-primary-500 to-primary-400 bg-clip-text text-transparent">
                      {agent.achievements.satisfactionRate}%
                    </div>
                    <div className="text-xs text-dark-400">שביעות רצון</div>
                  </div>
                  <div className="text-center px-2">
                    <div className="text-xl font-bold bg-gradient-to-r from-primary-500 to-primary-400 bg-clip-text text-transparent">
                      {agent.yearsOfExperience}+
                    </div>
                    <div className="text-xs text-dark-400">שנות ניסיון</div>
                  </div>
                </div>
              </div>

              <CardContent className="p-8 bg-gradient-to-b from-dark-950 to-black">
                {/* Bio */}
                <p className="text-dark-300 mb-6 leading-relaxed">
                  {agent.bio[0]}
                </p>

                {/* Specialties */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Briefcase className="w-4 h-4 text-primary-500" />
                    <h4 className="font-semibold text-white">תחומי התמחות</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {agent.specialties.map((specialty, idx) => (
                      <Badge
                        key={idx}
                        variant="ghost"
                        icon={Star}
                        size="sm"
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