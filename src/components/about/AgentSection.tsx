import Avatar from '@/components/ui/Avatar';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { agents } from '@/data/agents';
import { Briefcase, CheckCircle, Mail, Phone, Star, Trophy } from 'lucide-react';

const AgentSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            הכירו את הצוות
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            המומחים שילוו אתכם
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {agents.map((agent) => (
            <Card key={agent.id} variant="elevated" className="overflow-hidden group">
              {/* Header with gradient background */}
              <div className="relative bg-gradient-to-br from-primary-50 to-white p-8">
                <div className="flex flex-col items-center">
                  {/* Avatar with gradient border */}
                  <Avatar
                    src={agent.image}
                    alt={agent.name}
                    size="2xl"
                    border
                    gradient
                    className="mb-4"
                  />

                  {/* Name and Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {agent.name}
                  </h3>
                  <Badge variant="primary" className="mb-4">
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
                      <Button variant="outline" size="sm" icon={Mail}>
                        אימייל
                      </Button>
                    </a>
                  </div>
                </div>
              </div>

              {/* Stats Bar */}
              <div className="bg-primary-50 px-8 py-4">
                <div className="grid grid-cols-3 divide-x divide-primary-200">
                  <div className="text-center px-2">
                    <div className="text-xl font-bold text-primary-700">
                      {agent.achievements.propertiesSold}+
                    </div>
                    <div className="text-xs text-primary-600">נכסים</div>
                  </div>
                  <div className="text-center px-2">
                    <div className="text-xl font-bold text-primary-700">
                      {agent.achievements.satisfactionRate}%
                    </div>
                    <div className="text-xs text-primary-600">שביעות רצון</div>
                  </div>
                  <div className="text-center px-2">
                    <div className="text-xl font-bold text-primary-700">
                      {agent.yearsOfExperience}+
                    </div>
                    <div className="text-xs text-primary-600">שנות ניסיון</div>
                  </div>
                </div>
              </div>

              <CardContent className="p-8">
                {/* Bio */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {agent.bio[0]}
                </p>

                {/* Specialties */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Briefcase className="w-4 h-4 text-primary-600" />
                    <h4 className="font-semibold text-gray-700">תחומי התמחות</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {agent.specialties.map((specialty, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        icon={Star}
                        size="sm"
                      >
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Awards */}
                {agent.achievements.awards && agent.achievements.awards.length > 0 && (
                  <div className="bg-amber-50 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Trophy className="w-4 h-4 text-amber-600" />
                      <h4 className="font-semibold text-gray-700">פרסים והכרות</h4>
                    </div>
                    <div className="space-y-2">
                      {agent.achievements.awards.map((award, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">{award}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgentSection;