// AI Features demonstrations for CleverLink Driving School website

// Demo data and configurations
const demoData = {
    chatbot: {
        messages: [
            { type: 'bot', text: 'Hello! I\'m your AI assistant. How can I help you today?' },
            { type: 'user', text: 'What are your lesson prices?' },
            { type: 'bot', text: 'Our driving lessons are £35 per hour for standard lessons. We also offer intensive courses and block bookings with discounts. Would you like to know more about any specific package?' },
            { type: 'user', text: 'Do you offer automatic car lessons?' },
            { type: 'bot', text: 'Yes! We offer lessons in both manual and automatic vehicles. Automatic lessons are the same price at £35 per hour. Would you like to book a lesson or get more information?' }
        ],
        responses: {
            'hello': 'Hello! I\'m here to help with any questions about our driving lessons. What would you like to know?',
            'price': 'Our lessons are £35 per hour. We offer discounts for block bookings of 10+ lessons.',
            'booking': 'I can help you book a lesson! What day and time works best for you?',
            'test': 'We provide comprehensive theory and practical test preparation. Our pass rate is over 85%!',
            'instructor': 'All our instructors are DVSA approved with years of experience. Would you like to meet your local instructor?',
            'area': 'We cover all areas within 10 miles of our main locations. Where would you like lessons?',
            'automatic': 'Yes, we offer both manual and automatic driving lessons at the same price.',
            'intensive': 'Our intensive courses range from 1-week to 4-week programs. Shall I check availability?'
        }
    },
    
    voice: {
        scripts: [
            {
                trigger: 'Incoming call simulation',
                conversation: [
                    { speaker: 'AI', text: 'Hello, thank you for calling Bristol Driving Academy. I\'m Sarah, your AI assistant. How can I help you today?' },
                    { speaker: 'Customer', text: 'Hi, I\'d like to book a driving lesson please.' },
                    { speaker: 'AI', text: 'I\'d be happy to help you book a lesson. Can I get your name and what type of lesson you\'re looking for?' },
                    { speaker: 'Customer', text: 'It\'s John Smith, and I need manual transmission lessons.' },
                    { speaker: 'AI', text: 'Perfect John. I can see we have availability this week. Would Tuesday at 2 PM or Thursday at 10 AM work better for you?' },
                    { speaker: 'Customer', text: 'Thursday at 10 AM sounds good.' },
                    { speaker: 'AI', text: 'Excellent! I\'ve booked you in for Thursday at 10 AM with instructor Mike. You\'ll receive a confirmation text shortly. Is there anything else I can help you with?' }
                ]
            }
        ]
    },
    
    tutor: {
        questions: [
            {
                id: 1,
                question: 'What does this road sign mean?',
                sign: '🚫',
                options: [
                    'No entry for vehicles',
                    'No stopping',
                    'Speed limit 30',
                    'No overtaking'
                ],
                correct: 0,
                explanation: 'This is a "No entry" sign, prohibiting all vehicles from entering.'
            },
            {
                id: 2,
                question: 'What should you do when you see a STOP sign?',
                options: [
                    'Slow down and proceed if clear',
                    'Come to a complete stop',
                    'Give way to traffic on the right',
                    'Sound your horn'
                ],
                correct: 1,
                explanation: 'You must come to a complete stop at a STOP sign, even if the road appears clear.'
            },
            {
                id: 3,
                question: 'What is the national speed limit on a dual carriageway?',
                options: [
                    '60 mph',
                    '70 mph',
                    '80 mph',
                    '50 mph'
                ],
                correct: 1,
                explanation: 'The national speed limit on dual carriageways is 70 mph for cars.'
            },
            {
                id: 4,
                question: 'When should you use hazard warning lights?',
                options: [
                    'When parking illegally',
                    'In heavy rain',
                    'When your vehicle has broken down',
                    'When driving slowly'
                ],
                correct: 2,
                explanation: 'Hazard lights should be used when your vehicle has broken down or is causing an obstruction.'
            }
        ]
    },
    
    sms: {
        templates: [
            {
                name: 'Lesson Reminder',
                message: 'Hi {name}! Reminder: Your driving lesson is tomorrow at {time} with {instructor}. Please reply CANCEL if you need to reschedule. - Bristol Driving Academy'
            },
            {
                name: 'Booking Confirmation',
                message: 'Lesson confirmed! {day} at {time} with {instructor}. Meet at {location}. Any questions? Reply or call 01234 567890. - Bristol Driving Academy'
            },
            {
                name: 'Payment Reminder',
                message: 'Hi {name}, friendly reminder that payment for your lesson block is due. Pay online at bristoldrivingacademy.com/pay or bring cash to your next lesson. Thanks!'
            },
            {
                name: 'Test Results',
                message: 'Congratulations {name}! 🎉 You passed your driving test! We\'re so proud. Remember to send us a photo with your license - we love celebrating our students\' success!'
            }
        ]
    },
    
    documents: {
        templates: [
            {
                name: 'Student Invoice',
                preview: `INVOICE\n\nBristol Driving Academy\nInvoice #: INV-2025-001\nDate: {DATE}\n\nBill To:\n{STUDENT_NAME}\n{STUDENT_ADDRESS}\n\nDESCRIPTION:\nDriving Lessons (10 x 1 hour sessions)\nRate: £35.00 per hour\n\nSUBTOTAL: £350.00\nVAT (20%): £70.00\nTOTAL: £420.00\n\nPayment Terms: Due within 14 days\nGenerated by CleverLink AI`
            },
            {
                name: 'Driving Lesson Contract',
                preview: `DRIVING LESSON AGREEMENT\n\nStudent: {STUDENT_NAME}\nInstructor: {INSTRUCTOR_NAME}\nLesson Package: {PACKAGE_TYPE}\n\nTERMS:\n• Lessons are £35 per hour\n• 24 hours notice required for cancellations\n• Payment due at start of lesson block\n• Student must bring provisional license\n\nGenerated by CleverLink AI on {DATE}`
            },
            {
                name: 'Cancellation Policy',
                preview: `CANCELLATION & REFUND POLICY\n\nBristol Driving Academy\n\nCANCELLATION TERMS:\n• 24+ hours notice: Full refund/reschedule\n• 2-24 hours notice: 50% charge applies\n• Less than 2 hours: Full lesson charge\n\nREFUND POLICY:\n• Unused lessons refunded within 30 days\n• Processing fee of £5 may apply\n• Medical exemptions considered\n\nThis policy complies with UK consumer rights legislation.`
            }
        ]
    }
};

// Chatbot Demo
function loadChatbotDemo(container) {
    const chatbotHTML = `
        <div class="demo-chatbot active">
            <div class="chatbot-interface">
                <div class="chatbot-header">
                    <h4>AI Customer Support</h4>
                    <p>24/7 automated assistance</p>
                </div>
                <div class="chatbot-messages" id="chatMessages">
                    ${demoData.chatbot.messages.map(msg => `
                        <div class="message ${msg.type}">
                            <div class="message-bubble">${msg.text}</div>
                        </div>
                    `).join('')}
                </div>
                <div class="chatbot-input">
                    <input type="text" id="chatInput" placeholder="Ask about lessons, prices, booking..." />
                    <button id="chatSend">Send</button>
                </div>
            </div>
        </div>
    `;
    
    container.innerHTML = chatbotHTML;
    initChatbotInteraction();
}

function initChatbotInteraction() {
    const chatInput = document.getElementById('chatInput');
    const chatSend = document.getElementById('chatSend');
    const chatMessages = document.getElementById('chatMessages');
    
    if (!chatInput || !chatSend || !chatMessages) return;
    
    function sendMessage() {
        const message = chatInput.value.trim();
        if (!message) return;
        
        // Add user message
        addMessage('user', message);
        chatInput.value = '';
        
        // Simulate AI response
        setTimeout(() => {
            const response = getAIResponse(message);
            addMessage('bot', response);
        }, 1000);
    }
    
    function addMessage(type, text) {
        const messageEl = document.createElement('div');
        messageEl.className = `message ${type}`;
        messageEl.innerHTML = `<div class="message-bubble">${text}</div>`;
        chatMessages.appendChild(messageEl);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    function getAIResponse(message) {
        const lowercaseMessage = message.toLowerCase();
        const responses = demoData.chatbot.responses;
        
        for (const [key, response] of Object.entries(responses)) {
            if (lowercaseMessage.includes(key)) {
                return response;
            }
        }
        
        return 'I understand you\'re asking about our driving school services. Let me connect you with more specific information. What would you like to know about lessons, pricing, or booking?';
    }
    
    chatSend.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });
}

// Voice Agent Demo
function loadVoiceDemo(container) {
    const voiceHTML = `
        <div class="demo-voice active">
            <div class="voice-interface">
                <div class="voice-avatar" id="voiceAvatar">🎤</div>
                <h3>AI Voice Agent</h3>
                <p>Automated phone call handling</p>
                <div class="voice-transcript" id="voiceTranscript">
                    <p>Click "Start Call" to see a live demonstration</p>
                </div>
                <div class="voice-controls">
                    <button class="voice-btn" id="startCall">Start Call</button>
                    <button class="voice-btn" id="endCall" disabled>End Call</button>
                </div>
            </div>
        </div>
    `;
    
    container.innerHTML = voiceHTML;
    initVoiceInteraction();
}

function initVoiceInteraction() {
    const startCall = document.getElementById('startCall');
    const endCall = document.getElementById('endCall');
    const voiceAvatar = document.getElementById('voiceAvatar');
    const voiceTranscript = document.getElementById('voiceTranscript');
    
    if (!startCall || !endCall || !voiceAvatar || !voiceTranscript) return;
    
    let callInProgress = false;
    let conversationIndex = 0;
    
    function startCallDemo() {
        callInProgress = true;
        conversationIndex = 0;
        startCall.disabled = true;
        endCall.disabled = false;
        voiceAvatar.classList.add('speaking');
        
        playConversation();
    }
    
    function endCallDemo() {
        callInProgress = false;
        startCall.disabled = false;
        endCall.disabled = true;
        voiceAvatar.classList.remove('speaking');
        voiceTranscript.innerHTML = '<p>Call ended. Click "Start Call" to see another demonstration.</p>';
    }
    
    function playConversation() {
        const script = demoData.voice.scripts[0];
        if (conversationIndex >= script.conversation.length) {
            setTimeout(endCallDemo, 2000);
            return;
        }
        
        const line = script.conversation[conversationIndex];
        voiceTranscript.innerHTML = `
            <p><strong>${line.speaker}:</strong></p>
            <p>${line.text}</p>
        `;
        
        conversationIndex++;
        
        if (callInProgress) {
            setTimeout(playConversation, 3000);
        }
    }
    
    startCall.addEventListener('click', startCallDemo);
    endCall.addEventListener('click', endCallDemo);
}

// SMS Demo
function loadSMSDemo(container) {
    const smsHTML = `
        <div class="demo-sms active">
            <div class="sms-interface">
                <div class="sms-templates">
                    <h4>SMS Templates</h4>
                    ${demoData.sms.templates.map((template, index) => `
                        <div class="sms-template" data-template="${index}">
                            <h5>${template.name}</h5>
                            <p>${template.message.substring(0, 60)}...</p>
                        </div>
                    `).join('')}
                </div>
                <div class="sms-preview">
                    <div class="phone-mockup">
                        <div class="phone-screen" id="phoneScreen">
                            <div class="sms-message">
                                Hi John! Reminder: Your driving lesson is tomorrow at 2:00 PM with Mike. Please reply CANCEL if you need to reschedule. - Bristol Driving Academy
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    container.innerHTML = smsHTML;
    initSMSInteraction();
}

function initSMSInteraction() {
    const templates = document.querySelectorAll('.sms-template');
    const phoneScreen = document.getElementById('phoneScreen');
    
    templates.forEach(template => {
        template.addEventListener('click', function() {
            const templateIndex = parseInt(this.dataset.template);
            const templateData = demoData.sms.templates[templateIndex];
            
            // Simulate data substitution
            let message = templateData.message
                .replace('{name}', 'John')
                .replace('{time}', '2:00 PM')
                .replace('{instructor}', 'Mike')
                .replace('{day}', 'Tuesday')
                .replace('{location}', 'Main Street Car Park');
            
            phoneScreen.innerHTML = `<div class="sms-message">${message}</div>`;
            
            // Add selection effect
            templates.forEach(t => t.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
}

// Booking System Demo
function loadBookingDemo(container) {
    const bookingHTML = `
        <div class="demo-booking active">
            <div class="booking-interface">
                <div class="booking-calendar">
                    <div class="calendar-header">
                        <button id="prevMonth"><</button>
                        <h4 id="currentMonth">January 2025</h4>
                        <button id="nextMonth">></button>
                    </div>
                    <div class="calendar-grid" id="calendarGrid">
                        <!-- Calendar days will be generated here -->
                    </div>
                </div>
                <div class="booking-details">
                    <h4>Available Times</h4>
                    <p id="selectedDate">Select a date to see available times</p>
                    <div class="time-slots" id="timeSlots">
                        <!-- Time slots will be generated here -->
                    </div>
                    <button class="btn btn-primary" id="bookLesson" style="margin-top: 1rem; width: 100%;" disabled>Book Lesson</button>
                </div>
            </div>
        </div>
    `;
    
    container.innerHTML = bookingHTML;
    initBookingInteraction();
}

function initBookingInteraction() {
    const calendarGrid = document.getElementById('calendarGrid');
    const timeSlots = document.getElementById('timeSlots');
    const selectedDateEl = document.getElementById('selectedDate');
    const bookLessonBtn = document.getElementById('bookLesson');
    
    // Generate calendar
    generateCalendar();
    
    function generateCalendar() {
        const today = new Date();
        const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
        
        calendarGrid.innerHTML = '';
        
        for (let day = 1; day <= daysInMonth; day++) {
            const dayEl = document.createElement('div');
            dayEl.className = 'calendar-day';
            dayEl.textContent = day;
            
            // Make some days available, some unavailable (demo purposes)
            if (day <= today.getDate()) {
                // Past dates are unavailable
                dayEl.classList.add('unavailable');
            } else if (Math.random() > 0.4) {
                dayEl.classList.add('available');
            } else {
                dayEl.classList.add('unavailable');
            }
            
            dayEl.addEventListener('click', function() {
                if (this.classList.contains('available')) {
                    document.querySelectorAll('.calendar-day').forEach(d => d.classList.remove('selected'));
                    this.classList.add('selected');
                    showTimeSlots(day);
                }
            });
            
            calendarGrid.appendChild(dayEl);
        }
    }
    
    function showTimeSlots(day) {
        selectedDateEl.textContent = `January ${day}, 2025`;
        
        const times = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00'];
        timeSlots.innerHTML = '';
        
        times.forEach(time => {
            const timeSlot = document.createElement('div');
            timeSlot.className = 'time-slot';
            timeSlot.textContent = time;
            
            // Make some times available, some unavailable (demo purposes)
            if (Math.random() > 0.3) {
                timeSlot.classList.add('available');
            } else {
                timeSlot.classList.add('unavailable');
            }
            
            timeSlot.addEventListener('click', function() {
                if (this.classList.contains('available')) {
                    document.querySelectorAll('.time-slot').forEach(t => t.classList.remove('selected'));
                    this.classList.add('selected');
                    bookLessonBtn.disabled = false;
                }
            });
            
            timeSlots.appendChild(timeSlot);
        });
    }
    
    bookLessonBtn.addEventListener('click', function() {
        window.CleverLinkDS.showNotification('Lesson booked successfully! Confirmation SMS sent.', 'success');
        this.disabled = true;
    });
}

// Tutor Bot Demo
function loadTutorDemo(container) {
    const tutorHTML = `
        <div class="demo-tutor active">
            <div class="tutor-interface">
                <div class="quiz-header">
                    <h4>AI Highway Code Tutor</h4>
                    <p>Interactive learning and test preparation</p>
                </div>
                <div class="quiz-content">
                    <div class="quiz-question" id="quizQuestion">
                        Click "Start Quiz" to begin
                    </div>
                    <div class="quiz-options" id="quizOptions">
                        <button class="btn btn-primary" id="startQuiz">Start Quiz</button>
                    </div>
                    <div class="quiz-feedback" id="quizFeedback"></div>
                </div>
            </div>
        </div>
    `;
    
    container.innerHTML = tutorHTML;
    initTutorInteraction();
}

function initTutorInteraction() {
    const quizQuestion = document.getElementById('quizQuestion');
    const quizOptions = document.getElementById('quizOptions');
    const quizFeedback = document.getElementById('quizFeedback');
    const startQuiz = document.getElementById('startQuiz');
    
    let currentQuestionIndex = 0;
    let score = 0;
    
    function startQuizDemo() {
        currentQuestionIndex = 0;
        score = 0;
        showQuestion();
    }
    
    function showQuestion() {
        if (currentQuestionIndex >= demoData.tutor.questions.length) {
            showResults();
            return;
        }
        
        const question = demoData.tutor.questions[currentQuestionIndex];
        quizQuestion.innerHTML = `
            <div style="font-size: 2rem; margin-bottom: 1rem;">${question.sign || ''}</div>
            <div>${question.question}</div>
        `;
        
        quizOptions.innerHTML = '';
        question.options.forEach((option, index) => {
            const optionBtn = document.createElement('button');
            optionBtn.className = 'quiz-option';
            optionBtn.textContent = option;
            optionBtn.addEventListener('click', () => selectAnswer(index));
            quizOptions.appendChild(optionBtn);
        });
        
        quizFeedback.classList.remove('show');
    }
    
    function selectAnswer(selectedIndex) {
        const question = demoData.tutor.questions[currentQuestionIndex];
        const options = document.querySelectorAll('.quiz-option');
        
        options.forEach((option, index) => {
            option.disabled = true;
            if (index === question.correct) {
                option.classList.add('correct');
            } else if (index === selectedIndex && index !== question.correct) {
                option.classList.add('incorrect');
            }
        });
        
        const isCorrect = selectedIndex === question.correct;
        if (isCorrect) score++;
        
        quizFeedback.className = `quiz-feedback show ${isCorrect ? 'correct' : 'incorrect'}`;
        quizFeedback.textContent = question.explanation;
        
        setTimeout(() => {
            currentQuestionIndex++;
            showQuestion();
        }, 3000);
    }
    
    function showResults() {
        const percentage = Math.round((score / demoData.tutor.questions.length) * 100);
        quizQuestion.textContent = `Quiz Complete! You scored ${score}/${demoData.tutor.questions.length} (${percentage}%)`;
        
        quizOptions.innerHTML = `
            <button class="btn btn-primary" onclick="location.reload()">Try Again</button>
            <button class="btn btn-secondary" id="moreQuestions">More Questions</button>
        `;
        
        quizFeedback.className = 'quiz-feedback show correct';
        quizFeedback.textContent = percentage >= 80 ? 'Excellent work! You\'re ready for the theory test.' : 'Good effort! Keep practicing to improve your score.';
    }
    
    if (startQuiz) {
        startQuiz.addEventListener('click', startQuizDemo);
    }
}

// Documents Demo
function loadDocumentsDemo(container) {
    const documentsHTML = `
        <div class="demo-documents active">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; height: 100%; padding: 1rem; min-height: 500px;">
                <div>
                    <h4>Document Templates</h4>
                    ${demoData.documents.templates.map((doc, index) => `
                        <div class="document-template" data-doc="${index}" style="padding: 1rem; border: 1px solid #f0f0f0; border-radius: 0.5rem; margin-bottom: 1rem; cursor: pointer; transition: all 0.3s ease;">
                            <h5>${doc.name}</h5>
                            <p style="color: #666; font-size: 0.9rem;">AI-generated legal document</p>
                        </div>
                    `).join('')}
                    <button class="btn btn-primary" id="generateNew">Generate New Document</button>
                </div>
                <div>
                    <h4>Document Preview</h4>
                    <div id="documentPreview" style="background: #f8f9fa; border: 1px solid #f0f0f0; border-radius: 0.5rem; padding: 1.5rem; height: 400px; overflow-y: auto; font-family: monospace; font-size: 0.85rem; line-height: 1.6;">
                        Select a template to preview the AI-generated document
                    </div>
                </div>
            </div>
        </div>
    `;
    
    container.innerHTML = documentsHTML;
    initDocumentsInteraction();
}

function initDocumentsInteraction() {
    const templates = document.querySelectorAll('.document-template');
    const preview = document.getElementById('documentPreview');
    const generateNew = document.getElementById('generateNew');
    
    templates.forEach(template => {
        template.addEventListener('click', function() {
            const docIndex = parseInt(this.dataset.doc);
            const doc = demoData.documents.templates[docIndex];
            
            // Simulate AI document generation with realistic data
            let content = doc.preview
                .replace('{STUDENT_NAME}', 'John Smith')
                .replace('{INSTRUCTOR_NAME}', 'Mike Johnson')
                .replace('{PACKAGE_TYPE}', '10-lesson block')
                .replace('{DATE}', new Date().toLocaleDateString('en-GB'));
            
            preview.textContent = content;
            
            templates.forEach(t => t.style.backgroundColor = '');
            this.style.backgroundColor = '#f0f0f0';
        });
    });
    
    if (generateNew) {
        generateNew.addEventListener('click', function() {
            window.CleverLinkDS.showNotification('AI document generation would open in full editor', 'info');
        });
    }
}

// Lessons Management Demo
function loadLessonsDemo(container) {
    const lessonsHTML = `
        <div class="demo-lessons active">
            <div style="height: 100%; padding: 1rem; min-height: 500px;">
                <h4>AI Lesson Management</h4>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-top: 1rem;">
                    <div>
                        <h5>Student Progress</h5>
                        <div class="student-card" style="border: 1px solid #f0f0f0; border-radius: 0.5rem; padding: 1rem; margin-bottom: 1rem;">
                            <div style="display: flex; justify-content: between; align-items: center; margin-bottom: 0.5rem;">
                                <strong>John Smith</strong>
                                <span style="background: #e8f5e8; color: #2d5016; padding: 0.25rem 0.5rem; border-radius: 0.25rem; font-size: 0.8rem;">Progressing Well</span>
                            </div>
                            <p style="color: #666; margin: 0.5rem 0;">Lessons completed: 8/40</p>
                            <div style="background: #f0f0f0; height: 8px; border-radius: 4px; margin: 0.5rem 0;">
                                <div style="background: #28a745; height: 100%; width: 20%; border-radius: 4px;"></div>
                            </div>
                            <p style="color: #666; font-size: 0.9rem;">Next: Roundabouts and dual carriageways</p>
                        </div>
                        
                        <div class="student-card" style="border: 1px solid #f0f0f0; border-radius: 0.5rem; padding: 1rem;">
                            <div style="display: flex; justify-content: between; align-items: center; margin-bottom: 0.5rem;">
                                <strong>Sarah Johnson</strong>
                                <span style="background: #fff3cd; color: #856404; padding: 0.25rem 0.5rem; border-radius: 0.25rem; font-size: 0.8rem;">Needs Practice</span>
                            </div>
                            <p style="color: #666; margin: 0.5rem 0;">Lessons completed: 15/40</p>
                            <div style="background: #f0f0f0; height: 8px; border-radius: 4px; margin: 0.5rem 0;">
                                <div style="background: #ffc107; height: 100%; width: 37%; border-radius: 4px;"></div>
                            </div>
                            <p style="color: #666; font-size: 0.9rem;">Focus: Parallel parking, confidence building</p>
                        </div>
                    </div>
                    
                    <div>
                        <h5>AI-Generated Lesson Notes</h5>
                        <div style="background: #f8f9fa; border: 1px solid #f0f0f0; border-radius: 0.5rem; padding: 1rem; height: 350px; overflow-y: auto;">
                            <div style="margin-bottom: 1rem; padding-bottom: 1rem; border-bottom: 1px solid #e0e0e0;">
                                <strong>Lesson 8 - John Smith</strong>
                                <p style="color: #666; font-size: 0.9rem; margin: 0.5rem 0;">Date: 15/01/2025</p>
                                <p style="margin: 0.5rem 0;">✅ Mastered clutch control</p>
                                <p style="margin: 0.5rem 0;">✅ Good progress on hill starts</p>
                                <p style="margin: 0.5rem 0;">⚠️ Need more practice with mirrors</p>
                                <p style="color: #666; font-size: 0.9rem;"><em>AI Recommendation: Focus on observation skills next lesson</em></p>
                            </div>
                            
                            <div>
                                <strong>Lesson 15 - Sarah Johnson</strong>
                                <p style="color: #666; font-size: 0.9rem; margin: 0.5rem 0;">Date: 14/01/2025</p>
                                <p style="margin: 0.5rem 0;">✅ Improved reverse parking</p>
                                <p style="margin: 0.5rem 0;">⚠️ Still nervous in busy traffic</p>
                                <p style="margin: 0.5rem 0;">❌ Struggles with parallel parking</p>
                                <p style="color: #666; font-size: 0.9rem;"><em>AI Recommendation: Book quiet area sessions for confidence</em></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    container.innerHTML = lessonsHTML;
}

// AI Assistant Demo
function loadAssistantDemo(container) {
    const assistantHTML = `
        <div class="demo-assistant active">
            <div style="height: 100%; padding: 1rem; min-height: 500px;">
                <h4>AI Business Assistant</h4>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-top: 1rem;">
                    <div>
                        <h5>Business Insights</h5>
                        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin-bottom: 2rem;">
                            <div style="text-align: center; padding: 1rem; border: 1px solid #f0f0f0; border-radius: 0.5rem;">
                                <div style="font-size: 1.5rem; font-weight: 600; color: #28a745;">£2,840</div>
                                <div style="color: #666; font-size: 0.9rem;">This Week Revenue</div>
                            </div>
                            <div style="text-align: center; padding: 1rem; border: 1px solid #f0f0f0; border-radius: 0.5rem;">
                                <div style="font-size: 1.5rem; font-weight: 600; color: #007bff;">23</div>
                                <div style="color: #666; font-size: 0.9rem;">Lessons Completed</div>
                            </div>
                            <div style="text-align: center; padding: 1rem; border: 1px solid #f0f0f0; border-radius: 0.5rem;">
                                <div style="font-size: 1.5rem; font-weight: 600; color: #ffc107;">5</div>
                                <div style="color: #666; font-size: 0.9rem;">Pending Bookings</div>
                            </div>
                            <div style="text-align: center; padding: 1rem; border: 1px solid #f0f0f0; border-radius: 0.5rem;">
                                <div style="font-size: 1.5rem; font-weight: 600; color: #dc3545;">2</div>
                                <div style="color: #666; font-size: 0.9rem;">Overdue Payments</div>
                            </div>
                        </div>
                        
                        <h5>AI Recommendations</h5>
                        <div style="background: #e8f5e8; border-left: 4px solid #28a745; padding: 1rem; margin-bottom: 1rem;">
                            <strong>Optimize Schedule</strong>
                            <p style="margin: 0.5rem 0 0 0; color: #2d5016;">You have 3 free slots this Thursday. Consider offering last-minute discounts to fill them.</p>
                        </div>
                        
                        <div style="background: #fff3cd; border-left: 4px solid #ffc107; padding: 1rem;">
                            <strong>Follow Up Students</strong>
                            <p style="margin: 0.5rem 0 0 0; color: #856404;">3 students haven't booked their next lesson. AI will send automatic follow-up messages.</p>
                        </div>
                    </div>
                    
                    <div>
                        <h5>AI Chat Assistant</h5>
                        <div style="background: #f8f9fa; border: 1px solid #f0f0f0; border-radius: 0.5rem; height: 400px; display: flex; flex-direction: column;">
                            <div style="flex: 1; padding: 1rem; overflow-y: auto;">
                                <div style="background: white; padding: 0.75rem; border-radius: 0.5rem; margin-bottom: 1rem; border: 1px solid #e0e0e0;">
                                    <strong>You:</strong> How's business looking this month?
                                </div>
                                <div style="background: #007bff; color: white; padding: 0.75rem; border-radius: 0.5rem; margin-bottom: 1rem;">
                                    <strong>AI:</strong> Great question! This month you're up 15% compared to last month. You've completed 89 lessons with a 92% satisfaction rate. Revenue is tracking to hit £12,500.
                                </div>
                                <div style="background: white; padding: 0.75rem; border-radius: 0.5rem; margin-bottom: 1rem; border: 1px solid #e0e0e0;">
                                    <strong>You:</strong> Any students at risk of dropping out?
                                </div>
                                <div style="background: #007bff; color: white; padding: 0.75rem; border-radius: 0.5rem; margin-bottom: 1rem;">
                                    <strong>AI:</strong> I've identified 2 students who may need attention: Sarah Johnson (seems to lack confidence) and Mike Wilson (irregular booking pattern). Shall I suggest intervention strategies?
                                </div>
                            </div>
                            <div style="padding: 1rem; border-top: 1px solid #e0e0e0; background: white;">
                                <input type="text" placeholder="Ask your AI assistant anything..." style="width: 100%; padding: 0.5rem; border: 1px solid #e0e0e0; border-radius: 0.25rem;" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    container.innerHTML = assistantHTML;
}

// Export functions for global access
window.loadChatbotDemo = loadChatbotDemo;
window.loadVoiceDemo = loadVoiceDemo;
window.loadSMSDemo = loadSMSDemo;
window.loadBookingDemo = loadBookingDemo;
window.loadTutorDemo = loadTutorDemo;
window.loadDocumentsDemo = loadDocumentsDemo;
window.loadLessonsDemo = loadLessonsDemo;
window.loadAssistantDemo = loadAssistantDemo;