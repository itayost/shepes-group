import { Agent } from '@/data/agents';
import { Briefcase, Mail, Phone, Star, Trophy } from 'lucide-react';
import Image from 'next/image';

interface AgentCardProps {
  agent: Agent;
}

const AgentCard: React.FC<AgentCardProps> = ({ agent }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
      {/* Top Section with Image and Basic Info */}
      <div className="relative bg-gradient-to-b from-gray-50 to-white p-6 pb-8">
        <div className="flex flex-col items-center text-center">
          {/* Profile Image */}
          <div className="relative w-40 h-40 mb-4">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full"></div>
            <div className="absolute inset-1 bg-white rounded-full">
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image
                  src={agent.image}
                  alt={agent.name}
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* Name and Title */}
          <h3 className="text-2xl font-bold text-gray-900 mb-1">{agent.name}</h3>
          <p className="text-primary-600 font-medium mb-4">{agent.title}</p>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm">
            <a
              href={`tel:${agent.phone}`}
              className="flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition-colors flex-1"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">{agent.phone}</span>
            </a>
            <a
              href={`mailto:${agent.email}`}
              className="flex items-center justify-center gap-2 border border-primary-600 hover:bg-primary-50 text-primary-600 px-4 py-2 rounded-lg transition-colors flex-1"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm font-medium">אימייל</span>
            </a>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-primary-50 px-6 py-4">
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

      {/* Content Section */}
      <div className="p-6">
        {/* Bio */}
        <p className="text-gray-600 text-sm leading-relaxed mb-6">
          {agent.bio[0]}
        </p>

        {/* Specialties */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Briefcase className="w-4 h-4 text-primary-600" />
            <h4 className="text-sm font-semibold text-gray-700">תחומי התמחות</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {agent.specialties.map((specialty, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-1 bg-white border border-primary-200 text-primary-700 px-3 py-1 rounded-full text-xs"
              >
                <Star className="w-3 h-3" />
                {specialty}
              </span>
            ))}
          </div>
        </div>

        {/* Awards */}
        {agent.achievements.awards && agent.achievements.awards.length > 0 && (
          <div className="border-t pt-4">
            <div className="flex items-center gap-2 mb-3">
              <Trophy className="w-4 h-4 text-yellow-500" />
              <h4 className="text-sm font-semibold text-gray-700">פרסים והכרות</h4>
            </div>
            <div className="bg-yellow-50 rounded-lg p-3">
              <ul className="space-y-1">
                {agent.achievements.awards.map((award, index) => (
                  <li key={index} className="text-xs text-gray-700 flex items-start gap-2">
                    <span className="text-yellow-500 mt-0.5">•</span>
                    <span>{award}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AgentCard;