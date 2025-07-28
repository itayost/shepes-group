import { Agent } from '@/data/agents';
import Image from 'next/image';

interface AgentCardProps {
  agent: Agent;
}

const AgentCard: React.FC<AgentCardProps> = ({ agent }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="grid md:grid-cols-5 gap-6">
        {/* תמונה */}
        <div className="md:col-span-2">
          <div className="relative h-full min-h-[400px]">
            <Image
              src={agent.image}
              alt={agent.name}
              fill
              className="object-cover"
            />
          </div>
        </div>
        
        {/* תוכן */}
        <div className="md:col-span-3 p-8">
          <h3 className="text-3xl font-bold mb-2">{agent.name}</h3>
          <p className="text-xl text-primary-600 mb-4">{agent.title}</p>
          
          {/* פרטי קשר */}
          <div className="flex flex-wrap gap-4 mb-6">
            <a
              href={`tel:${agent.phone}`}
              className="flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors"
            >
              <span>📱</span> {agent.phone}
            </a>
            <a
              href={`mailto:${agent.email}`}
              className="flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors"
            >
              <span>✉️</span> {agent.email}
            </a>
          </div>
          
          {/* תיאור */}
          <div className="prose prose-sm text-gray-700 mb-6">
            <p>{agent.bio[0]}</p>
          </div>
          
          {/* התמחויות */}
          <div className="mb-6">
            <h4 className="font-bold mb-3">תחומי התמחות:</h4>
            <div className="flex flex-wrap gap-2">
              {agent.specialties.map((specialty, index) => (
                <span
                  key={index}
                  className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm"
                >
                  {specialty}
                </span>
              ))}
            </div>
          </div>
          
          {/* הישגים */}
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="text-2xl font-bold text-primary-600">
                {agent.achievements.propertiesSold}+
              </div>
              <div className="text-xs text-gray-600">נכסים נמכרו</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="text-2xl font-bold text-primary-600">
                {agent.achievements.satisfactionRate}%
              </div>
              <div className="text-xs text-gray-600">שביעות רצון</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="text-2xl font-bold text-primary-600">
                {agent.yearsOfExperience}+
              </div>
              <div className="text-xs text-gray-600">שנות ניסיון</div>
            </div>
          </div>
          
          {/* פרסים */}
          {agent.achievements.awards && agent.achievements.awards.length > 0 && (
            <div className="mt-6">
              <h4 className="font-bold mb-2">פרסים והכרות:</h4>
              <ul className="space-y-1">
                {agent.achievements.awards.map((award, index) => (
                  <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                    <span className="text-yellow-500">🏆</span>
                    {award}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AgentCard;