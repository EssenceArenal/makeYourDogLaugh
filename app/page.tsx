"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

// Spiritual content based on your book
const spiritualExercises = [
  {
    id: 1,
    title: "The Mirror Meditation",
    category: "Sacred Connection",
    description: "Sit quietly with your dog and gaze into their eyes. See yourself reflected in their pure, unconditional love. What does your dog see in you that you might be missing?",
    duration: "5-10 minutes",
    part: "Your Dog Is Your Mirror",
    benefits: ["Self-awareness", "Emotional healing", "Divine connection"]
  },
  {
    id: 2,
    title: "Heart Coherence Check-in",
    category: "Energy Alignment",
    description: "Place your hand on your heart, then on your dog's heart. Breathe together until your rhythms sync. Feel the electromagnetic field of love you share.",
    duration: "3-5 minutes",
    part: "Your Dog Is Your Mirror",
    benefits: ["Inner peace", "Energetic alignment", "Presence"]
  },
  {
    id: 3,
    title: "Daily Joy Inventory",
    category: "Laughter Frequency",
    description: "Learn presence from your pup. Notice every moment of joy your dog experiences today. Let their natural joy frequency attune your own vibration.",
    duration: "Throughout the day",
    part: "Your Dog Is Your Mirror",
    benefits: ["Joy activation", "Present moment awareness", "Energy shift"]
  },
  {
    id: 4,
    title: "The Accident Blessing Ritual",
    category: "Divine Patience",
    description: "When accidents happen, pause. See it as an opportunity for grace. Practice responding instead of reacting. Transform frustration into compassion.",
    duration: "As needed",
    part: "The Transformation Begins",
    benefits: ["Patience", "Self-control", "Unconditional love"]
  },
  {
    id: 5,
    title: "Sacred Walk Meditation",
    category: "Presence Practice",
    description: "Walk with your dog as a moving prayer. Each step is a moment of presence. Let your dog guide you into the eternal now.",
    duration: "15-30 minutes",
    part: "The Transformation Begins",
    benefits: ["Mindfulness", "Grounding", "Moving meditation"]
  },
  {
    id: 6,
    title: "Unconditional Love Mirror",
    category: "Heart Opening",
    description: "When your dog loves you despite your flaws, receive that love fully. Let it teach you how to love yourself unconditionally.",
    duration: "Daily practice",
    part: "The Transformation Begins",
    benefits: ["Self-compassion", "Healing shame", "Divine love"]
  },
  {
    id: 7,
    title: "Silent Conversation Technique",
    category: "Intuitive Communication",
    description: "Practice communicating with your dog through energy and intention rather than words. Trust your inner knowing and theirs.",
    duration: "10-15 minutes",
    part: "Advanced Soul Training",
    benefits: ["Intuition development", "Trust", "Telepathic connection"]
  },
  {
    id: 8,
    title: "Gentle Leader Meditation",
    category: "Authentic Authority",
    description: "Lead your dog from love, not dominance. Feel the difference between forcing and inspiring. Embody confident, gentle strength.",
    duration: "During training",
    part: "Advanced Soul Training",
    benefits: ["Leadership skills", "Heart-centered authority", "Confidence"]
  },
  {
    id: 9,
    title: "Daily Sacred Commitment",
    category: "Spiritual Discipline",
    description: "Make one small, consistent commitment to your dog daily. Notice how integrity in small things creates transformation.",
    duration: "Ongoing",
    part: "Advanced Soul Training",
    benefits: ["Character building", "Consistency", "Spiritual discipline"]
  },
  {
    id: 10,
    title: "Play Prayer Session",
    category: "Sacred Silliness",
    description: "Play with your dog as an act of worship. Let go of adult seriousness and remember that joy is your birthright. Laugh until your soul opens.",
    duration: "15-20 minutes",
    part: "Joy as Spiritual Path",
    benefits: ["Inner child healing", "Joy activation", "Cellular transformation"]
  },
  {
    id: 11,
    title: "Sacred Chore Meditation",
    category: "Finding Divine in Mundane",
    description: "Turn cleaning up after your dog into a gratitude practice. Find blessing in the inconvenient. Transform mundane into miraculous.",
    duration: "As needed",
    part: "Joy as Spiritual Path",
    benefits: ["Gratitude", "Sacred awareness", "Mindful service"]
  },
  {
    id: 12,
    title: "Surrender and Trust Ritual",
    category: "Faith Development",
    description: "Practice letting go of control during training. Trust your dog's natural wisdom and your intuitive connection.",
    duration: "Varies",
    part: "Joy as Spiritual Path",
    benefits: ["Faith", "Trust", "Ego dissolution"]
  }
];

const tailWaggingWisdom = [
  "Your dog chose you before you were born. Honor that sacred contract.",
  "Dogs don't care who you were yesterday, only who you are in this moment.",
  "Every bark is a prayer, every tail wag is a blessing.",
  "Your dog sees your soul, not your ego. Trust their vision of you.",
  "In your dog's eyes, you are already enlightened.",
  "Dogs live in perpetual presence. They are your teachers in the art of NOW.",
  "The love in your dog's heart is a direct channel to divine love.",
  "Every walk is a pilgrimage when taken with conscious awareness.",
  "Your dog's joy is contagious because joy is your natural state.",
  "Dogs don't hold grudges because they understand forgiveness is freedom.",
  "Training your dog is really about training yourself.",
  "Your dog mirrors your energy, not your words.",
  "Play with your dog is prayer in motion.",
  "Dogs are enlightened beings disguised as pets.",
  "Your dog's unconditional love is healing your wounded heart."
];

const reflectionPrompts = [
  "What did your dog mirror back to you today about your inner state?",
  "How did playing with your dog change your energy?",
  "What lesson in unconditional love did your dog teach you?",
  "How did your dog help you stay present today?",
  "What made you and your dog laugh together today?",
  "How did your dog show you divine love in action?",
  "What did you learn about patience through your dog today?",
  "How did your dog guide you back to joy?",
  "What spiritual teaching did your dog offer you today?",
  "How did your dog help you practice forgiveness?"
];

const dogImages = [
  "dog1.jpg",
  "dog2.jpg", 
  "dog3.jpg",
  "dog4.jpg",
  "dog5.jpg",
  "dog6.jpg",
  "dog7.jpg",
  "dog8.jpg",
  "dog9.jpg",
  "dog10.jpg",
  "dog11.jpg",
  "dog12.jpg",
  "dog13.jpg",
  "dog14.jpg",
  "dog15.jpg",
  "dog16.jpg",
  "dog17.jpg"
];

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dogName, setDogName] = useState("");
  const [greeting, setGreeting] = useState("");
  const [currentView, setCurrentView] = useState("auth");
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [journalEntry, setJournalEntry] = useState("");
  const [currentWisdom, setCurrentWisdom] = useState(0);
  const [completedExercises, setCompletedExercises] = useState([]);
  const [reflectionPrompt, setReflectionPrompt] = useState("");
  const [dailyReflection, setDailyReflection] = useState("");
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    // Removed automatic redirect that might cause issues
    if (dogName) {
      setGreeting(`Ready to discover the divine through ${dogName} today?`);
    }
  }, [dogName]);

  const handleSignup = async () => {
    console.log('Signup attempt:', { email, password, dogName }); // Debug log
    
    if (!email || !password || !dogName) {
      alert("Please fill in all fields to begin your spiritual journey");
      return;
    }
    
    try {
      console.log('Attempting to import Airtable...'); // Debug log
      const { saveUserData } = await import("../src/lib/airtable");
      console.log('Airtable imported successfully'); // Debug log
      
      const userData = { email, dogName, journalEntry: "" };
      console.log('Saving user data:', userData); // Debug log
      
      await saveUserData(userData);
      console.log('User data saved successfully'); // Debug log
      
      alert("Welcome to your spiritual journey with your divine companion!");
      setCurrentView("dashboard");
      
    } catch (error) {
      console.error('Signup error details:', error); // Detailed error log
      alert(`Signup error: ${error.message || 'Unknown error occurred'}`);
      
      // Still allow them to proceed to test the app
      setCurrentView("dashboard");
    }
  };

  const handleLogin = async () => {
    console.log('Login attempt:', { email, password, dogName }); // Debug log
    
    if (!email || !password) {
      alert("Please fill in your credentials");
      return;
    }
    if (!dogName) {
      alert("Please enter your dog's name");
      return;
    }
    
    setCurrentView("dashboard");
    alert("Welcome back to your sacred practice!");
  };

  const completeExercise = (exerciseId) => {
    if (!completedExercises.includes(exerciseId)) {
      setCompletedExercises([...completedExercises, exerciseId]);
      setStreak(streak + 1);
    }
    const randomPrompt = reflectionPrompts[Math.floor(Math.random() * reflectionPrompts.length)];
    setReflectionPrompt(randomPrompt);
    setCurrentView("reflection");
  };

  const getRandomWisdom = () => {
    setCurrentWisdom(Math.floor(Math.random() * tailWaggingWisdom.length));
  };

  const saveReflection = async () => {
    if (dailyReflection.trim()) {
      try {
        console.log('Saving reflection...'); // Debug log
        const { saveUserData } = await import("../src/lib/airtable");
        
        const reflectionData = {
          email, 
          dogName, 
          journalEntry: `${reflectionPrompt}\n\n${dailyReflection}`
        };
        console.log('Reflection data:', reflectionData); // Debug log
        
        await saveUserData(reflectionData);
        console.log('Reflection saved successfully'); // Debug log
        
        alert("Reflection saved with love");
        setDailyReflection("");
        setCurrentView("dashboard");
      } catch (error) {
        console.error('Reflection save error:', error); // Debug log
        alert("Reflection saved in your heart (error occurred)");
        setCurrentView("dashboard");
      }
    }
  };

  // Auth View
  if (currentView === "auth") {
    return (
      <div className="min-h-screen" style={{background: 'linear-gradient(135deg, #F6F1E9 0%, #FFD93D 100%)'}}>
        <div className="p-6 max-w-md mx-auto pt-16">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4" style={{color: '#4F200D'}}>
              Make Your Dog Laugh
            </h1>
            <p className="text-xl mb-2" style={{color: '#FF9A00'}}>Heal Yourself Through</p>
            <p className="text-2xl font-bold" style={{color: '#4F200D'}}>Spiritual Dog Training</p>
            <div className="mt-4 p-4 rounded-2xl" style={{backgroundColor: 'rgba(255, 154, 0, 0.1)'}}>
              <p className="text-sm italic" style={{color: '#4F200D'}}>
                "Your dog is your spiritual teacher disguised as your best friend"
              </p>
            </div>
          </div>

          <div className="p-6 rounded-3xl shadow-lg" style={{backgroundColor: 'rgba(255, 255, 255, 0.8)'}}>
            <input
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              className="w-full p-4 mb-4 rounded-xl border-2 focus:outline-none focus:ring-2"
              style={{borderColor: '#FFD93D', backgroundColor: '#F6F1E9'}}
            />
            <input
              placeholder="Password"
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              className="w-full p-4 mb-4 rounded-xl border-2 focus:outline-none focus:ring-2"
              style={{borderColor: '#FFD93D', backgroundColor: '#F6F1E9'}}
            />
            <input
              placeholder="Your Dog's Sacred Name"
              type="text"
              value={dogName}
              onChange={(e) => {
                console.log('Dog name input:', e.target.value); // Debug log
                setDogName(e.target.value);
              }}
              autoComplete="off"
              maxLength={50}
              className="w-full p-4 mb-6 rounded-xl border-2 focus:outline-none focus:ring-2"
              style={{borderColor: '#FFD93D', backgroundColor: '#F6F1E9'}}
            />
            
            <button
              onClick={handleSignup}
              className="w-full p-4 rounded-2xl font-bold mb-3 transform hover:scale-105 transition-all shadow-md"
              style={{backgroundColor: '#FF9A00', color: '#F6F1E9'}}
            >
              Begin Sacred Journey
            </button>
            <button
              onClick={handleLogin}
              className="w-full p-4 rounded-2xl font-bold transform hover:scale-105 transition-all shadow-md"
              style={{backgroundColor: '#4F200D', color: '#F6F1E9'}}
            >
              Continue Journey
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Dashboard View
  if (currentView === "dashboard") {
    return (
      <div className="min-h-screen" style={{background: 'linear-gradient(135deg, #F6F1E9 0%, #FFD93D 50%, #F6F1E9 100%)'}}>
        <div className="p-4 max-w-md mx-auto">
          {/* Header */}
          <div className="text-center mb-6 p-4 rounded-2xl" style={{backgroundColor: 'rgba(255, 255, 255, 0.9)'}}>
            <h1 className="text-2xl font-bold mb-2" style={{color: '#4F200D'}}>
              Ready to laugh with {dogName} today?
            </h1>
            <div className="grid grid-cols-6 gap-2 mb-4 max-h-32 overflow-hidden">
              {dogImages.map((img, index) => (
                <div key={index} className="w-12 h-12 rounded-full overflow-hidden border-2 shadow-md" style={{borderColor: '#FF9A00'}}>
                  <Image
                    src={`/images/dogs/${img}`}
                    alt={`Sacred companion ${index + 1}`}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      console.log(`Failed to load image: /images/dogs/${img}`);
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-center space-x-6">
              <div className="text-center">
                <div className="text-2xl font-bold" style={{color: '#FF9A00'}}>{completedExercises.length}</div>
                <div className="text-sm" style={{color: '#4F200D'}}>Practices</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold" style={{color: '#FF9A00'}}>{streak}</div>
                <div className="text-sm" style={{color: '#4F200D'}}>Day Streak</div>
              </div>
            </div>
          </div>

          {/* Navigation Grid */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <button
              onClick={() => setCurrentView("exercises")}
              className="p-6 rounded-2xl text-center transform hover:scale-105 transition-all shadow-lg"
              style={{backgroundColor: '#FFD93D', color: '#4F200D'}}
            >
              <div className="text-3xl mb-2">🧘‍♀️</div>
              <div className="font-bold">Sacred Practices</div>
              <div className="text-sm mt-1">Daily Exercises</div>
            </button>
            
            <button
              onClick={() => setCurrentView("journal")}
              className="p-6 rounded-2xl text-center transform hover:scale-105 transition-all shadow-lg"
              style={{backgroundColor: '#FF9A00', color: '#F6F1E9'}}
            >
              <div className="text-3xl mb-2">📖</div>
              <div className="font-bold">Soul Journal</div>
              <div className="text-sm mt-1">Daily Reflections</div>
            </button>
            
            <button
              onClick={() => {getRandomWisdom(); setCurrentView("wisdom");}}
              className="p-6 rounded-2xl text-center transform hover:scale-105 transition-all shadow-lg"
              style={{backgroundColor: '#4F200D', color: '#F6F1E9'}}
            >
              <div className="text-3xl mb-2">💫</div>
              <div className="font-bold">Tail Wisdom</div>
              <div className="text-sm mt-1">Divine Insights</div>
            </button>
            
            <button
              onClick={() => setCurrentView("progress")}
              className="p-6 rounded-2xl text-center transform hover:scale-105 transition-all shadow-lg"
              style={{backgroundColor: 'rgba(255, 217, 61, 0.8)', color: '#4F200D'}}
            >
              <div className="text-3xl mb-2">🌟</div>
              <div className="font-bold">Soul Growth</div>
              <div className="text-sm mt-1">Your Journey</div>
            </button>
          </div>

          {/* Today's Wisdom Preview */}
          <div className="p-4 rounded-2xl shadow-md" style={{backgroundColor: 'rgba(255, 255, 255, 0.9)'}}>
            <h3 className="font-bold mb-2" style={{color: '#4F200D'}}>Today's Tail Wagging Wisdom</h3>
            <p className="text-sm italic" style={{color: '#FF9A00'}}>
              "{tailWaggingWisdom[currentWisdom]}"
            </p>
            <button 
              onClick={getRandomWisdom}
              className="mt-3 px-4 py-2 rounded-xl text-sm font-bold transform hover:scale-105 transition-all"
              style={{backgroundColor: '#FFD93D', color: '#4F200D'}}
            >
              More Wisdom
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Exercises View
  if (currentView === "exercises") {
    return (
      <div className="min-h-screen" style={{background: 'linear-gradient(135deg, #F6F1E9 0%, #FFD93D 100%)'}}>
        <div className="p-4 max-w-md mx-auto">
          <div className="flex items-center mb-6">
            <button 
              onClick={() => setCurrentView("dashboard")}
              className="p-2 rounded-xl mr-3" 
              style={{backgroundColor: '#FF9A00', color: '#F6F1E9'}}
            >
              ←
            </button>
            <h1 className="text-2xl font-bold" style={{color: '#4F200D'}}>Sacred Practices</h1>
          </div>

          <div className="space-y-4">
            {spiritualExercises.map((exercise) => (
              <div 
                key={exercise.id}
                className="p-4 rounded-2xl shadow-md cursor-pointer transform hover:scale-102 transition-all"
                style={{backgroundColor: 'rgba(255, 255, 255, 0.9)'}}
                onClick={() => {setSelectedExercise(exercise); setCurrentView("exercise-detail");}}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg" style={{color: '#4F200D'}}>{exercise.title}</h3>
                  {completedExercises.includes(exercise.id) && (
                    <span className="text-xl">✅</span>
                  )}
                </div>
                <p className="text-sm mb-2" style={{color: '#FF9A00'}}>{exercise.category}</p>
                <p className="text-sm mb-3" style={{color: '#4F200D'}}>{exercise.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs px-3 py-1 rounded-full" style={{backgroundColor: '#FFD93D', color: '#4F200D'}}>
                    {exercise.duration}
                  </span>
                  <span className="text-xs" style={{color: '#FF9A00'}}>
                    {exercise.part}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Exercise Detail View
  if (currentView === "exercise-detail" && selectedExercise) {
    return (
      <div className="min-h-screen" style={{background: 'linear-gradient(135deg, #FFD93D 0%, #FF9A00 100%)'}}>
        <div className="p-4 max-w-md mx-auto">
          <div className="flex items-center mb-6">
            <button 
              onClick={() => setCurrentView("exercises")}
              className="p-2 rounded-xl mr-3" 
              style={{backgroundColor: '#F6F1E9', color: '#4F200D'}}
            >
              ←
            </button>
            <h1 className="text-xl font-bold" style={{color: '#F6F1E9'}}>Sacred Practice</h1>
          </div>

          <div className="p-6 rounded-3xl shadow-lg mb-6" style={{backgroundColor: 'rgba(246, 241, 233, 0.95)'}}>
            <h2 className="text-2xl font-bold mb-3" style={{color: '#4F200D'}}>
              {selectedExercise.title}
            </h2>
            <p className="text-lg mb-4" style={{color: '#FF9A00'}}>
              {selectedExercise.category}
            </p>
            <p className="text-base mb-6 leading-relaxed" style={{color: '#4F200D'}}>
              {selectedExercise.description}
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="font-semibold" style={{color: '#4F200D'}}>Duration:</span>
                <span style={{color: '#FF9A00'}}>{selectedExercise.duration}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold" style={{color: '#4F200D'}}>From:</span>
                <span style={{color: '#FF9A00'}}>{selectedExercise.part}</span>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold mb-2" style={{color: '#4F200D'}}>Benefits:</h3>
              <div className="flex flex-wrap gap-2">
                {selectedExercise.benefits.map((benefit, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 rounded-full text-sm"
                    style={{backgroundColor: '#FFD93D', color: '#4F200D'}}
                  >
                    {benefit}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={() => completeExercise(selectedExercise.id)}
              className="w-full p-4 rounded-2xl font-bold transform hover:scale-105 transition-all shadow-md"
              style={{
                backgroundColor: completedExercises.includes(selectedExercise.id) ? '#4F200D' : '#FF9A00',
                color: '#F6F1E9'
              }}
            >
              {completedExercises.includes(selectedExercise.id) ? "Practice Complete ✓" : "Complete Practice"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Reflection View
  if (currentView === "reflection") {
    return (
      <div className="min-h-screen" style={{background: 'linear-gradient(135deg, #F6F1E9 0%, #FFD93D 100%)'}}>
        <div className="p-4 max-w-md mx-auto">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold mb-4" style={{color: '#4F200D'}}>Paws for Reflection</h1>
            <div className="text-4xl mb-4">🐾</div>
          </div>

          <div className="p-6 rounded-3xl shadow-lg mb-6" style={{backgroundColor: 'rgba(255, 255, 255, 0.9)'}}>
            <h3 className="font-bold mb-4 text-lg" style={{color: '#4F200D'}}>
              {reflectionPrompt}
            </h3>
            <textarea
              value={dailyReflection}
              onChange={(e) => setDailyReflection(e.target.value)}
              placeholder="Share your heart's wisdom here..."
              className="w-full h-32 p-4 rounded-xl border-2 resize-none focus:outline-none focus:ring-2"
              style={{borderColor: '#FFD93D', backgroundColor: '#F6F1E9'}}
            />
          </div>

          <div className="space-y-3">
            <button
              onClick={saveReflection}
              className="w-full p-4 rounded-2xl font-bold transform hover:scale-105 transition-all shadow-md"
              style={{backgroundColor: '#FF9A00', color: '#F6F1E9'}}
            >
              Save Sacred Reflection
            </button>
            <button
              onClick={() => setCurrentView("dashboard")}
              className="w-full p-4 rounded-2xl font-bold transform hover:scale-105 transition-all"
              style={{backgroundColor: 'rgba(79, 32, 13, 0.1)', color: '#4F200D'}}
            >
              Return Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Wisdom View
  if (currentView === "wisdom") {
    return (
      <div className="min-h-screen" style={{background: 'linear-gradient(135deg, #4F200D 0%, #FF9A00 100%)'}}>
        <div className="p-4 max-w-md mx-auto">
          <div className="flex items-center mb-6">
            <button 
              onClick={() => setCurrentView("dashboard")}
              className="p-2 rounded-xl mr-3" 
              style={{backgroundColor: '#F6F1E9', color: '#4F200D'}}
            >
              ←
            </button>
            <h1 className="text-2xl font-bold" style={{color: '#F6F1E9'}}>Tail Wagging Wisdom</h1>
          </div>

          <div className="p-8 rounded-3xl shadow-lg mb-6 text-center" style={{backgroundColor: 'rgba(246, 241, 233, 0.95)'}}>
            <div className="text-6xl mb-4">💫</div>
            <p className="text-xl leading-relaxed mb-6 italic" style={{color: '#4F200D'}}>
              "{tailWaggingWisdom[currentWisdom]}"
            </p>
            <button
              onClick={getRandomWisdom}
              className="px-6 py-3 rounded-2xl font-bold transform hover:scale-105 transition-all shadow-md"
              style={{backgroundColor: '#FFD93D', color: '#4F200D'}}
            >
              Receive New Wisdom
            </button>
          </div>

          <div className="p-4 rounded-2xl" style={{backgroundColor: 'rgba(246, 241, 233, 0.8)'}}>
            <h3 className="font-bold mb-3" style={{color: '#4F200D'}}>Daily Wisdom Practice</h3>
            <p className="text-sm mb-3" style={{color: '#4F200D'}}>
              Take a moment to let this wisdom sink into your heart. How might your dog be teaching you this lesson right now?
            </p>
            <button
              onClick={() => setCurrentView("dashboard")}
              className="w-full p-3 rounded-xl font-bold"
              style={{backgroundColor: '#FF9A00', color: '#F6F1E9'}}
            >
              Carry This Wisdom Forward
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Journal View
  if (currentView === "journal") {
    return (
      <div className="min-h-screen" style={{background: 'linear-gradient(135deg, #F6F1E9 0%, #FFD93D 100%)'}}>
        <div className="p-4 max-w-md mx-auto">
          <div className="flex items-center mb-6">
            <button 
              onClick={() => setCurrentView("dashboard")}
              className="p-2 rounded-xl mr-3" 
              style={{backgroundColor: '#FF9A00', color: '#F6F1E9'}}
            >
              ←
            </button>
            <h1 className="text-2xl font-bold" style={{color: '#4F200D'}}>My Dog Made Me Laugh Today</h1>
          </div>

          <div className="p-6 rounded-3xl shadow-lg mb-6" style={{backgroundColor: 'rgba(255, 255, 255, 0.9)'}}>
            <h3 className="font-bold mb-4" style={{color: '#4F200D'}}>
              What brought you joy with {dogName} today?
            </h3>
            <textarea
              value={journalEntry}
              onChange={(e) => setJournalEntry(e.target.value)}
              placeholder="Share your heart's joy here..."
              className="w-full h-40 p-4 rounded-xl border-2 resize-none focus:outline-none focus:ring-2"
              style={{borderColor: '#FFD93D', backgroundColor: '#F6F1E9'}}
            />
          </div>

          <div className="space-y-4 mb-6">
            <div className="p-4 rounded-2xl" style={{backgroundColor: 'rgba(255, 154, 0, 0.1)'}}>
              <h4 className="font-semibold mb-2" style={{color: '#4F200D'}}>Gratitude Prompts:</h4>
              <ul className="text-sm space-y-1" style={{color: '#4F200D'}}>
                <li>• What made you both laugh today?</li>
                <li>• How did {dogName} surprise you?</li>
                <li>• What moment of pure joy did you share?</li>
                <li>• How did your dog heal your heart today?</li>
              </ul>
            </div>
          </div>

          <button
            onClick={async () => {
              try {
                console.log('Saving journal entry...'); // Debug log
                const { saveUserData } = await import("../src/lib/airtable");
                
                const journalData = { email, dogName, journalEntry };
                console.log('Journal data:', journalData); // Debug log
                
                await saveUserData(journalData);
                console.log('Journal saved successfully'); // Debug log
                
                alert("Joy captured and saved!");
                setJournalEntry("");
                setCurrentView("dashboard");
              } catch (error) {
                console.error('Journal save error:', error); // Debug log
                alert("Joy saved in your heart (error occurred)");
                setCurrentView("dashboard");
              }
            }}
            className="w-full p-4 rounded-2xl font-bold transform hover:scale-105 transition-all shadow-md"
            style={{backgroundColor: '#FF9A00', color: '#F6F1E9'}}
          >
            Save Today's Joy
          </button>
        </div>
      </div>
    );
  }

  // Progress View
  if (currentView === "progress") {
    return (
      <div className="min-h-screen" style={{background: 'linear-gradient(135deg, #F6F1E9 0%, #FFD93D 100%)'}}>
        <div className="p-4 max-w-md mx-auto">
          <div className="flex items-center mb-6">
            <button 
              onClick={() => setCurrentView("dashboard")}
              className="p-2 rounded-xl mr-3" 
              style={{backgroundColor: '#FF9A00', color: '#F6F1E9'}}
            >
              ←
            </button>
            <h1 className="text-2xl font-bold" style={{color: '#4F200D'}}>Soul Growth Journey</h1>
          </div>

          {/* Progress Stats */}
          <div className="p-6 rounded-3xl shadow-lg mb-6" style={{backgroundColor: 'rgba(255, 255, 255, 0.9)'}}>
            <h2 className="text-xl font-bold mb-4 text-center" style={{color: '#4F200D'}}>
              Your Sacred Progress
            </h2>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center p-4 rounded-xl" style={{backgroundColor: '#FFD93D'}}>
                <div className="text-3xl font-bold" style={{color: '#4F200D'}}>{completedExercises.length}</div>
                <div className="text-sm" style={{color: '#4F200D'}}>Practices Completed</div>
              </div>
              <div className="text-center p-4 rounded-xl" style={{backgroundColor: '#FF9A00'}}>
                <div className="text-3xl font-bold" style={{color: '#F6F1E9'}}>{streak}</div>
                <div className="text-sm" style={{color: '#F6F1E9'}}>Day Streak</div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-4">
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium" style={{color: '#4F200D'}}>
                  Spiritual Journey Progress
                </span>
                <span className="text-sm" style={{color: '#FF9A00'}}>
                  {Math.round((completedExercises.length / spiritualExercises.length) * 100)}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="h-3 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: '#FF9A00',
                    width: `${(completedExercises.length / spiritualExercises.length) * 100}%`
                  }}
                ></div>
              </div>
            </div>

            {/* Spiritual Level */}
            <div className="text-center p-4 rounded-xl" style={{backgroundColor: 'rgba(255, 154, 0, 0.1)'}}>
              <h3 className="font-bold mb-2" style={{color: '#4F200D'}}>Current Spiritual Level</h3>
              <div className="text-2xl font-bold mb-1" style={{color: '#FF9A00'}}>
                {completedExercises.length < 3 ? "Awakening Soul" :
                 completedExercises.length < 6 ? "Growing Spirit" :
                 completedExercises.length < 9 ? "Enlightened Heart" :
                 "Divine Companion"}
              </div>
              <p className="text-xs" style={{color: '#4F200D'}}>
                {completedExercises.length < 3 ? "Beginning your sacred journey with your furry teacher" :
                 completedExercises.length < 6 ? "Deepening your spiritual connection through play and presence" :
                 completedExercises.length < 9 ? "Embodying love and joy in your daily practice" :
                 "Living as one with your divine four-legged master"}
              </p>
            </div>
          </div>

          {/* Achievements */}
          <div className="p-6 rounded-3xl shadow-lg mb-6" style={{backgroundColor: 'rgba(255, 255, 255, 0.9)'}}>
            <h3 className="font-bold mb-4" style={{color: '#4F200D'}}>Sacred Achievements</h3>
            <div className="space-y-3">
              <div className={`flex items-center p-3 rounded-xl ${completedExercises.length >= 1 ? 'opacity-100' : 'opacity-50'}`} 
                   style={{backgroundColor: '#FFD93D'}}>
                <span className="text-2xl mr-3">{completedExercises.length >= 1 ? '🌟' : '⭐'}</span>
                <div>
                  <div className="font-semibold" style={{color: '#4F200D'}}>First Step Taken</div>
                  <div className="text-xs" style={{color: '#4F200D'}}>Completed your first sacred practice</div>
                </div>
              </div>

              <div className={`flex items-center p-3 rounded-xl ${completedExercises.length >= 3 ? 'opacity-100' : 'opacity-50'}`} 
                   style={{backgroundColor: '#FF9A00'}}>
                <span className="text-2xl mr-3">{completedExercises.length >= 3 ? '🎭' : '🎪'}</span>
                <div>
                  <div className="font-semibold" style={{color: '#F6F1E9'}}>Laughter Activated</div>
                  <div className="text-xs" style={{color: '#F6F1E9'}}>Discovered joy in 3 practices</div>
                </div>
              </div>

              <div className={`flex items-center p-3 rounded-xl ${completedExercises.length >= 6 ? 'opacity-100' : 'opacity-50'}`} 
                   style={{backgroundColor: '#4F200D'}}>
                <span className="text-2xl mr-3">{completedExercises.length >= 6 ? '💖' : '🤍'}</span>
                <div>
                  <div className="font-semibold" style={{color: '#F6F1E9'}}>Heart Healer</div>
                  <div className="text-xs" style={{color: '#F6F1E9'}}>Opened your heart through 6 practices</div>
                </div>
              </div>

              <div className={`flex items-center p-3 rounded-xl ${completedExercises.length >= 12 ? 'opacity-100' : 'opacity-50'}`} 
                   style={{backgroundColor: 'rgba(255, 217, 61, 0.8)'}}>
                <span className="text-2xl mr-3">{completedExercises.length >= 12 ? '👑' : '🎯'}</span>
                <div>
                  <div className="font-semibold" style={{color: '#4F200D'}}>Spiritual Master</div>
                  <div className="text-xs" style={{color: '#4F200D'}}>Completed all sacred practices</div>
                </div>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="p-4 rounded-2xl" style={{backgroundColor: 'rgba(255, 154, 0, 0.1)'}}>
            <h3 className="font-bold mb-2" style={{color: '#4F200D'}}>Continue Your Journey</h3>
            <p className="text-sm mb-3" style={{color: '#4F200D'}}>
              {completedExercises.length < spiritualExercises.length 
                ? `You have ${spiritualExercises.length - completedExercises.length} more practices to discover. Each one brings you closer to divine joy with ${dogName}.`
                : `Congratulations! You've completed all practices. Continue your daily journey of love, laughter, and spiritual growth with ${dogName}.`
              }
            </p>
            <button
              onClick={() => setCurrentView(completedExercises.length < spiritualExercises.length ? "exercises" : "dashboard")}
              className="w-full p-3 rounded-xl font-bold"
              style={{backgroundColor: '#FF9A00', color: '#F6F1E9'}}
            >
              {completedExercises.length < spiritualExercises.length ? "Continue Practices" : "Return to Dashboard"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Default return (fallback)
  return (
    <div className="min-h-screen flex items-center justify-center" style={{background: 'linear-gradient(135deg, #F6F1E9 0%, #FFD93D 100%)'}}>
      <div className="text-center">
        <div className="text-6xl mb-4">🐕</div>
        <h1 className="text-2xl font-bold" style={{color: '#4F200D'}}>
          Loading your spiritual journey...
        </h1>
      </div>
    </div>
  );
}
