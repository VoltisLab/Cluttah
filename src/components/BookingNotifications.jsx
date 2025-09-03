import React, { useState, useEffect } from 'react';
import { CheckCircle, MapPin, Clock } from 'lucide-react';

const BookingNotifications = () => {
  const [currentNotification, setCurrentNotification] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const services = [
    'Sofa Collection',
    'Furniture Removal',
    'Rubbish Clearance',
    'Appliance Removal',
    'Office Clearance',
    'House Clearance',
    'Garden Clearance',
    'Mattress Collection'
  ];

  const ukAreas = [
    'London',
    'Birmingham',
    'Manchester',
    'Leeds',
    'Liverpool',
    'Sheffield',
    'Bristol',
    'Newcastle',
    'Nottingham',
    'Leicester',
    'Coventry',
    'Bradford',
    'Stoke-on-Trent',
    'Wolverhampton',
    'Plymouth',
    'Derby',
    'Southampton',
    'Portsmouth',
    'Brighton',
    'Hull',
    'Preston',
    'Luton',
    'Milton Keynes',
    'Northampton',
    'Norwich',
    'Bournemouth',
    'Swindon',
    'Chelmsford',
    'Exeter',
    'Colchester',
    'Gloucester',
    'Cambridge',
    'Oxford',
    'York',
    'Bath',
    'Canterbury',
    'Chester',
    'Carlisle',
    'Durham',
    'Lancaster',
    'Salisbury',
    'Winchester',
    'St Albans',
    'Watford',
    'Reading',
    'Slough',
    'High Wycombe',
    'Basingstoke',
    'Crawley',
    'Woking',
    'Guildford',
    'Maidstone',
    'Hastings',
    'Eastbourne',
    'Worthing'
  ];

  const firstNames = [
    'Sarah', 'Mike', 'Emma', 'James', 'Laura', 'David', 'Rachel', 'Tom', 'Sophie', 'Ben',
    'Katie', 'Alex', 'Hannah', 'Chris', 'Amy', 'Dan', 'Lucy', 'Matt', 'Chloe', 'Sam',
    'Jessica', 'Ryan', 'Charlotte', 'Adam', 'Megan', 'Josh', 'Rebecca', 'Luke', 'Grace', 'Nathan'
  ];

  const timeframes = [
    'just now',
    '2 minutes ago',
    '5 minutes ago',
    '8 minutes ago',
    '12 minutes ago',
    '15 minutes ago'
  ];

  const generateNotification = () => {
    const service = services[Math.floor(Math.random() * services.length)];
    const area = ukAreas[Math.floor(Math.random() * ukAreas.length)];
    const name = firstNames[Math.floor(Math.random() * firstNames.length)];
    const time = timeframes[Math.floor(Math.random() * timeframes.length)];

    return {
      id: Date.now(),
      name,
      service,
      area,
      time
    };
  };

  useEffect(() => {
    const showNotification = () => {
      const notification = generateNotification();
      setCurrentNotification(notification);
      setIsVisible(true);

      // Hide after 4 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 4000);
    };

    // Show first notification after 3 seconds
    const initialTimeout = setTimeout(showNotification, 3000);

    // Then show notifications every 8-15 seconds
    const interval = setInterval(() => {
      const randomDelay = Math.random() * 7000 + 8000; // 8-15 seconds
      setTimeout(showNotification, randomDelay);
    }, 15000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  if (!currentNotification) return null;

  return (
    <div className={`fixed bottom-4 left-4 md:bottom-6 md:left-6 z-50 transition-all duration-500 transform ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
    }`}>
      <div className="bg-white/95 backdrop-blur-sm border border-slate-200 rounded-2xl shadow-2xl p-4 max-w-xs md:max-w-sm animate-bounce-subtle hover:scale-105 transition-transform duration-200">
        {/* Header */}
        <div className="flex items-center mb-3">
          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3 animate-pulse">
            <CheckCircle className="w-5 h-5 text-green-600" />
          </div>
          <div className="flex-1">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-ping"></div>
              <span className="text-sm font-medium text-green-700">Just Booked</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-2">
          <p className="text-slate-900 font-semibold text-sm md:text-base">
            <span className="text-blue-600">{currentNotification.name}</span> in {currentNotification.area}
          </p>
          <p className="text-slate-700 text-sm">
            {currentNotification.service}
          </p>
          
          {/* Footer */}
          <div className="flex items-center justify-between pt-2 border-t border-slate-100">
            <div className="flex items-center text-xs text-slate-500">
              <MapPin className="w-3 h-3 mr-1" />
              {currentNotification.area}
            </div>
            <div className="flex items-center text-xs text-slate-500">
              <Clock className="w-3 h-3 mr-1" />
              {currentNotification.time}
            </div>
          </div>
        </div>

        {/* Animated progress bar */}
        <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-bl-2xl animate-progress"></div>
        
        {/* Close button */}
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center text-slate-400 hover:text-slate-600 transition-colors hover:scale-110"
        >
          ×
        </button>
      </div>

      <style jsx>{`
        @keyframes bounce-subtle {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-4px);
          }
          60% {
            transform: translateY(-2px);
          }
        }
        
        @keyframes progress {
          from {
            width: 100%;
          }
          to {
            width: 0%;
          }
        }
        
        .animate-bounce-subtle {
          animation: bounce-subtle 0.6s ease-out;
        }
        
        .animate-progress {
          animation: progress 4s linear;
        }
      `}</style>
    </div>
  );
};

export default BookingNotifications;