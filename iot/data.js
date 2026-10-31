const lecturesData = [
    // ============================ Lecture 1: Introduction to IoT ============================
    {
        id: 1,
        title: "المحاضرة الأولى: مقدمة في إنترنت الأشياء",
        icon: "fa-satellite-dish",
        summary: {
            ar: `
                <h3>ما هو إنترنت الأشياء (IoT)؟</h3>
                <p>إنترنت الأشياء هو مفهوم يصف شبكة عالمية من الأجهزة المادية المترابطة ("الأشياء"). هذه الأجهزة ليست مجرد حواسيب أو هواتف، بل تشمل كل شيء من الأجهزة المنزلية مثل الثلاجات ومكيفات الهواء، إلى السيارات وأجهزة الاستشعار الصناعية. كل "شيء" في هذه الشبكة مزود بمعرفات فريدة (UIDs) والقدرة على نقل البيانات عبر الشبكة دون الحاجة إلى تدخل بشري مباشر.</p>
                <p>الفكرة الجوهرية هي تمكين هذه الأجهزة من "الإحساس" ببيئتها المحيطة وجمع البيانات، ثم مشاركة هذه البيانات عبر الإنترنت ليتم تحليلها والاستفادة منها في تقديم خدمات أو اتخاذ قرارات ذكية.</p>
                <h3>المكونات الرئيسية لنظام IoT:</h3>
                <ul>
                    <li><strong>الأشياء/الأجهزة (Things/Devices):</strong> هي المكونات الأساسية في الطبقة المادية. وظيفتها هي التفاعل المباشر مع البيئة. تشمل أجهزة استشعار (Sensors) لجمع البيانات مثل درجة الحرارة والرطوبة والحركة، والمحركات (Actuators) لتنفيذ إجراءات مادية مثل فتح قفل أو تشغيل محرك.</li>
                    <li><strong>البوابات (Gateways):</strong> تعمل كجسر وسيط. تقوم بجمع البيانات من مجموعة من أجهزة الاستشعار المحلية ثم ترسلها بشكل مجمع إلى السحابة. هذا يوفر الطاقة ويقلل من تعقيد الأجهزة الطرفية.</li>
                    <li><strong>الاتصال والسحابة (Connectivity & Cloud):</strong> بمجرد جمع البيانات، يجب إرسالها إلى السحابة. السحابة هي شبكة ضخمة من الخوادم التي توفر قدرات هائلة لتخزين البيانات ومعالجتها وتحليلها. يتم الاتصال عبر تقنيات متنوعة مثل الواي فاي، البلوتوث، الشبكات الخلوية (4G/5G)، و LoRaWAN.</li>
                    <li><strong>التحليلات (Analytics):</strong> في هذه المرحلة، يتم تحويل البيانات الخام إلى معلومات مفيدة. تُستخدم خوارزميات وبرامج متقدمة (قد تشمل تعلم الآلة) لتحليل البيانات، اكتشاف الأنماط، وتوليد رؤى قابلة للتنفيذ.</li>
                    <li><strong>واجهة المستخدم (User Interface):</strong> هي الجزء الذي يتفاعل معه المستخدم النهائي. يمكن أن تكون تطبيقًا على الهاتف المحمول، أو لوحة تحكم على موقع ويب، أو حتى تنبيهات عبر البريد الإلكتروني. تعرض هذه الواجهة المعلومات للمستخدم وتسمح له بالتحكم في نظام IoT.</li>
                </ul>
                <h3>أمثلة عملية على تطبيقات IoT:</h3>
                <ul>
                    <li><strong>المنازل الذكية:</strong> التحكم في الإضاءة والحرارة والأجهزة والأمن عن بعد.</li>
                    <li><strong>السيارات المتصلة:</strong> مراقبة أداء السيارة، الملاحة المتقدمة، وتحديثات البرامج عن بعد.</li>
                    <li><strong>الزراعة الذكية:</strong> استخدام أجهزة استشعار لمراقبة رطوبة التربة وصحة المحاصيل لتحسين الري وتقليل استهلاك المياه.</li>
                    <li><strong>الرعاية الصحية الذكية:</strong> أجهزة يمكن ارتداؤها لمراقبة العلامات الحيوية للمريض وإرسال تنبيهات للأطباء في حالات الطوارئ.</li>
                </ul>
            `,
            en: `
                <h3>What is the Internet of Things (IoT)?</h3>
                <p>The Internet of Things is a concept describing a global network of interconnected physical devices ("things"). These are not just computers or phones, but include everything from home appliances like refrigerators and air conditioners, to cars and industrial sensors. Each "thing" in this network is equipped with Unique Identifiers (UIDs) and the ability to transfer data over a network without requiring human-to-human or human-to-computer interaction.</p>
                <p>The core idea is to enable these devices to "sense" their environment, collect data, and then share this data over the internet to be analyzed and used to provide services or make intelligent decisions.</p>
                <h3>Key Components of an IoT System:</h3>
                <ul>
                    <li><strong>Things/Devices:</strong> These are the core components in the physical layer. Their function is to interact directly with the environment. This includes sensors to collect data like temperature, humidity, and motion, and actuators to perform physical actions like opening a lock or starting a motor.</li>
                    <li><strong>Gateways:</strong> They act as an intermediary bridge. They collect data from a group of local sensors and then send it in bulk to the cloud. This saves energy and reduces the complexity of the end devices.</li>
                    <li><strong>Connectivity & Cloud:</strong> Once data is collected, it must be sent to the cloud. The cloud is a massive network of servers that provides vast capabilities for data storage, processing, and analysis. Connectivity is achieved through various technologies like Wi-Fi, Bluetooth, cellular networks (4G/5G), and LoRaWAN.</li>
                    <li><strong>Analytics:</strong> In this stage, raw data is transformed into useful information. Advanced algorithms and software (which may include machine learning) are used to analyze the data, detect patterns, and generate actionable insights.</li>
                    <li><strong>User Interface (UI):</strong> This is the part the end-user interacts with. It can be a mobile application, a web dashboard, or even email alerts. The UI presents information to the user and allows them to control the IoT system.</li>
                </ul>
                <h3>Practical Examples of IoT Applications:</h3>
                <ul>
                    <li><strong>Smart Homes:</strong> Remotely controlling lighting, heating, appliances, and security.</li>
                    <li><strong>Connected Cars:</strong> Monitoring vehicle performance, advanced navigation, and remote software updates.</li>
                    <li><strong>Smart Agriculture:</strong> Using sensors to monitor soil moisture and crop health to optimize irrigation and reduce water consumption.</li>
                    <li><strong>Smart Healthcare:</strong> Wearable devices that monitor a patient's vital signs and send alerts to doctors in emergencies.</li>
                </ul>
            `
        },
        quiz: [
            { question: "What does 'IoT' stand for?", options: ["Internet of Technology", "Internet of Things", "Internal of Things", "Internet of Telecommunication"], answer: 1, hint: "الاسم يصف شبكة من 'الأشياء' المادية المتصلة بالإنترنت." },
            { question: "Which of the following is a key component of an IoT system?", options: ["Sensors", "Connectivity", "User Interface", "All of the above"], answer: 3, hint: "نظام إنترنت الأشياء يحتاج إلى كل هذه المكونات ليعمل بشكل متكامل." },
            { question: "What is the function of sensors in IoT?", options: ["To process data", "To display information", "To collect data from the environment", "To connect to the internet"], answer: 2, hint: "المستشعرات هي 'حواس' الجهاز التي تكتشف التغيرات في البيئة المحيطة." },
            { question: "How do IoT devices typically send data to the cloud?", options: ["Only via Ethernet cable", "Using technologies like Wi-Fi, Bluetooth, or Cellular", "By physical mail", "They don't send data"], answer: 1, hint: "الاتصال اللاسلكي هو السمة الغالبة في أجهزة إنترنت الأشياء لسهولة تركيبها." },
            { question: "What happens to data in the 'Analytics' stage of IoT?", options: ["It is deleted", "It is stored without any changes", "It is analyzed to make intelligent decisions", "It is printed on paper"], answer: 2, hint: "الغرض من جمع البيانات هو تحليلها واستخلاص معلومات مفيدة منها." },
            { question: "A smart watch is an example of what?", options: ["An IoT Device", "A Cloud Server", "A Network Gateway", "A User Interface only"], answer: 0, hint: "الساعة الذكية تجمع البيانات (مثل نبضات القلب) وترسلها عبر الإنترنت، وهي من أشهر الأمثلة." },
            { question: "What is a primary objective of IoT?", options: ["To make devices more expensive", "To complicate simple tasks", "To connect physical objects and exchange data", "To increase power consumption"], answer: 2, hint: "الهدف الأساسي هو جعل الأجهزة 'ذكية' وقادرة على التواصل مع بعضها البعض." },
            { question: "Which component of IoT allows users to interact with the system?", options: ["Sensor", "Actuator", "Cloud", "User Interface"], answer: 3, hint: "فكر في التطبيق الذي تستخدمه على هاتفك للتحكم في الأجهزة الذكية." },
            { question: "The term 'Things' in IoT refers to:", options: ["Only computers and smartphones", "Abstract concepts", "Physical objects with embedded technology", "Software programs"], answer: 2, hint: "يشمل المصطلح أي جهاز مادي يمكن تزويده بالقدرة على الاتصال بالإنترنت." },
            { question: "Which of these is an example of an IoT application?", options: ["Smart Home", "Smart Farming", "Smart Healthcare", "All of the above"], answer: 3, hint: "إنترنت الأشياء له تطبيقات في جميع المجالات لجعلها أكثر كفاءة وذكاء." },
            { question: "What is an 'actuator' in an IoT system?", options: ["A device that collects data", "A device that performs a physical action", "A cloud storage unit", "A type of network protocol"], answer: 1, hint: "بينما المستشعر 'يحس' بالبيئة، المحرك 'يتصرف' بناءً على البيانات، مثل قفل الباب." },
            { question: "The number of connected IoT devices is expected to:", options: ["Decrease", "Stay the same", "Increase significantly", "Become zero"], answer: 2, hint: "يتوقع الخبراء نموًا هائلاً في عدد الأجهزة المتصلة في السنوات القادمة." },
            { question: "What technology is NOT typically used for IoT connectivity?", options: ["Wi-Fi", "Bluetooth", "5G", "Morse Code"], answer: 3, hint: "إنترنت الأشياء يعتمد على تقنيات اتصال لاسلكية حديثة وسريعة." },
            { question: "A 'smart grid' is an IoT application in which industry?", options: ["Healthcare", "Transportation", "Energy", "Agriculture"], answer: 2, hint: "الشبكات الذكية (Smart Grids) تتعلق بإدارة وتوزيع الطاقة الكهربائية بكفاءة." },
            { question: "What is the role of the 'Gateway' in an IoT system?", options: ["To power the sensors", "To act as a bridge between devices and the cloud", "To display the user interface", "To manufacture the devices"], answer: 1, hint: "البوابة هي وسيط يجمع البيانات من الأجهزة المحلية ويرسلها إلى الإنترنت." },
            { question: "Which of these is a major concern for IoT?", options: ["Device color", "Security and Privacy", "The font used in the app", "The shape of the sensor"], answer: 1, hint: "مع اتصال مليارات الأجهزة، يصبح تأمينها وحماية بيانات المستخدمين تحديًا كبيرًا." },
            { question: "A system that monitors bridge health in real-time is an application of:", options: ["Social Media", "IoT", "E-commerce", "Graphic Design"], answer: 1, hint: "استخدام أجهزة استشعار لمراقبة حالة البنية التحتية وإرسال تنبيهات هو مثال نموذجي لإنترنت الأشياء." },
            { question: "What does 'embedded technology' mean in the context of IoT?", options: ["Technology that is buried underground", "Sensors and processors built into the device", "Technology that is easy to remove", "Software that is sold separately"], answer: 1, hint: "التكنولوجيا المدمجة تكون جزءًا لا يتجزأ من تصميم الجهاز نفسه." },
            { question: "What is the 'Cloud' in an IoT context?", options: ["Water vapor in the sky", "A local storage device", "A network of servers for data storage and processing", "A type of sensor"], answer: 2, hint: "السحابة توفر البنية التحتية اللازمة لتخزين ومعالجة الكم الهائل من البيانات التي تجمعها أجهزة IoT." },
            { question: "An example of a smart wearable device is:", options: ["A traditional watch", "A fitness tracker", "A simple ring", "A plain t-shirt"], answer: 1, hint: "أجهزة تتبع اللياقة البدنية تقيس نشاطك وتتصل بهاتفك، مما يجعلها جهاز IoT." }
        ]
    },
    // ============================ Lecture 2: IoT Architecture ============================
    {
        id: 2,
        title: "المحاضرة الثانية: معمارية إنترنت الأشياء",
        icon: "fa-sitemap",
        summary: {
            ar: `
                <h3>الطبقات الأربع لمعمارية IoT</h3>
                <p>لتحقيق نظام فعال ومترابط، يتم تصميم معمارية إنترنت الأشياء عادةً في أربع طبقات منطقية. كل طبقة لها وظائفها ومسؤولياتها المحددة، وتعمل معًا لتقديم حل متكامل من الجهاز إلى المستخدم.</p>
                <ul>
                    <li><strong>1. طبقة الإدراك/الاستشعار (Perception/Sensor Layer):</strong>
                        <br>هذه هي الطبقة المادية التي تتصل مباشرة بالعالم الحقيقي. إنها "حواس" نظام إنترنت الأشياء.
                        <ul>
                            <li><strong>المكونات:</strong> أجهزة استشعار (Sensors) مثل مستشعرات الحرارة، الضوء، الحركة، والرطوبة. ومحركات (Actuators) مثل الأقفال الذكية، الصمامات، والمحركات الكهربائية.</li>
                            <li><strong>الوظيفة:</strong> جمع البيانات من البيئة المحيطة عبر المستشعرات، وتنفيذ الأوامر في العالم المادي عبر المحركات. هذه الطبقة هي المسؤولة عن تحويل الظواهر الفيزيائية إلى إشارات رقمية والعكس.</li>
                        </ul>
                    </li>
                    <li><strong>2. طبقة الشبكة/النقل (Network/Transport Layer):</strong>
                        <br>هذه الطبقة هي العمود الفقري للاتصالات. وظيفتها هي نقل البيانات التي تم جمعها بشكل آمن وموثوق من طبقة الأجهزة إلى الطبقات العليا (المعالجة).
                        <ul>
                            <li><strong>المكونات:</strong> بوابات (Gateways)، أجهزة توجيه (Routers)، ومحولات (Switches).</li>
                            <li><strong>التقنيات:</strong> تستخدم بروتوكولات اتصال مختلفة حسب المتطلبات مثل المدى، استهلاك الطاقة، وعرض النطاق الترددي. من الأمثلة: Wi-Fi, Bluetooth, Zigbee, LoRaWAN, والشبكات الخلوية (4G/5G).</li>
                        </ul>
                    </li>
                    <li><strong>3. طبقة المعالجة (Processing Layer):</strong>
                        <br>تُعرف أيضًا باسم طبقة البرامج الوسيطة (Middleware). هنا يحدث "سحر" إنترنت الأشياء، حيث يتم تحويل البيانات الخام إلى معلومات ذات قيمة.
                         <ul>
                            <li><strong>المكونات:</strong> منصات الحوسبة السحابية (مثل AWS IoT, Google Cloud IoT)، قواعد البيانات، ومحركات التحليل.</li>
                            <li><strong>الوظيفة:</strong> تخزين الكميات الهائلة من البيانات، تحليلها باستخدام خوارزميات معقدة، تطبيق نماذج تعلم الآلة، واتخاذ قرارات ذكية بناءً على التحليل.</li>
                        </ul>
                    </li>
                    <li><strong>4. طبقة التطبيقات (Application Layer):</strong>
                        <br>هذه هي الطبقة التي يتفاعل معها المستخدم النهائي. إنها تقدم نتائج المعالجة للمستخدم بطريقة مفهومة وتسمح له بالتحكم في النظام.
                        <ul>
                            <li><strong>المكونات:</strong> تطبيقات الهواتف الذكية، لوحات التحكم على الويب (Dashboards)، وأنظمة التنبيهات.</li>
                            <li><strong>الوظيفة:</strong> توفير خدمات خاصة بصناعة معينة. على سبيل المثال، في المنزل الذكي، تعرض هذه الطبقة درجة حرارة الغرفة وتسمح للمستخدم بتعديلها. وفي الرعاية الصحية، قد تعرض مخطط القلب للمريض للطبيب.</li>
                        </ul>
                    </li>
                </ul>
            `,
            en: `
                <h3>The Four Layers of IoT Architecture</h3>
                <p>To achieve an effective and interconnected system, the IoT architecture is typically designed in four logical layers. Each layer has its specific functions and responsibilities, working together to deliver an integrated solution from the device to the user.</p>
                <ul>
                    <li><strong>1. Perception/Sensor Layer:</strong>
                        <br>This is the physical layer that connects directly to the real world. It is the "senses" of the IoT system.
                        <ul>
                            <li><strong>Components:</strong> Sensors like temperature, light, motion, and humidity sensors. Actuators like smart locks, valves, and electric motors.</li>
                            <li><strong>Function:</strong> To collect data from the environment via sensors, and to execute commands in the physical world via actuators. This layer is responsible for converting physical phenomena into digital signals and vice versa.</li>
                        </ul>
                    </li>
                    <li><strong>2. Network/Transport Layer:</strong>
                        <br>This layer is the backbone of communication. Its function is to securely and reliably transport the collected data from the device layer to the upper (processing) layers.
                        <ul>
                            <li><strong>Components:</strong> Gateways, Routers, and Switches.</li>
                            <li><strong>Technologies:</strong> It uses various communication protocols depending on requirements such as range, power consumption, and bandwidth. Examples include: Wi-Fi, Bluetooth, Zigbee, LoRaWAN, and cellular networks (4G/5G).</li>
                        </ul>
                    </li>
                    <li><strong>3. Processing Layer:</strong>
                        <br>Also known as the middleware layer. This is where the "magic" of IoT happens, transforming raw data into valuable information.
                         <ul>
                            <li><strong>Components:</strong> Cloud computing platforms (e.g., AWS IoT, Google Cloud IoT), databases, and analytics engines.</li>
                            <li><strong>Function:</strong> To store massive amounts of data, analyze it using complex algorithms, apply machine learning models, and make intelligent decisions based on the analysis.</li>
                        </ul>
                    </li>
                    <li><strong>4. Application Layer:</strong>
                        <br>This is the top layer that the end-user interacts with. It delivers the results of the processing to the user in an understandable way and allows them to control the system.
                        <ul>
                            <li><strong>Components:</strong> Smartphone applications, web dashboards, and alert systems.</li>
                            <li><strong>Function:</strong> To provide industry-specific services. For example, in a smart home, this layer displays the room temperature and allows the user to adjust it. In healthcare, it might display a patient's ECG to a doctor.</li>
                        </ul>
                    </li>
                </ul>
            `
        },
        quiz: [
            { question: "How many main layers are typically in the IoT architecture?", options: ["Two", "Three", "Four", "Five"], answer: 2, hint: "المعمارية القياسية تتكون من أربع طبقات رئيسية، تبدأ من الأجهزة وتنتهي بالتطبيق." },
            { question: "Which layer of the IoT architecture includes sensors and actuators?", options: ["Application Layer", "Network Layer", "Processing Layer", "Perception Layer"], answer: 3, hint: "هذه الطبقة هي المسؤولة عن 'الإحساس' بالبيئة المحيطة والتأثير فيها." },
            { question: "The Network Layer is responsible for what task?", options: ["Collecting data from sensors", "Analyzing data", "Transferring data between layers", "Displaying results to the user"], answer: 2, hint: "فكر في 'شبكة' تربط بين الأجهزة والسحابة." },
            { question: "Which technology is commonly used in the Network Layer?", options: ["Wi-Fi", "HTML", "Python", "SQL"], answer: 0, hint: "الواي فاي هو تقنية اتصال شائعة لنقل البيانات لاسلكيًا." },
            { question: "In which layer does data analysis and storage primarily occur?", options: ["Perception Layer", "Network Layer", "Processing Layer", "Application Layer"], answer: 2, hint: "البيانات الخام تحتاج إلى 'معالجة' لتصبح ذات قيمة." },
            { question: "Cloud computing is most associated with which IoT layer?", options: ["Sensor Layer", "Application Layer", "Processing Layer", "Physical Layer"], answer: 2, hint: "توفر السحابة القدرة الحاسوبية الهائلة اللازمة لتخزين وتحليل بيانات إنترنت الأشياء." },
            { question: "The user interacts directly with which layer?", options: ["Network Layer", "Perception Layer", "Processing Layer", "Application Layer"], answer: 3, hint: "الطبقة التي تراها وتستخدمها، مثل تطبيق الهاتف، هي طبقة التطبيقات." },
            { question: "A smart home app on your phone is part of the:", options: ["Application Layer", "Network Layer", "Perception Layer", "Processing Layer"], answer: 0, hint: "التطبيقات هي الواجهة النهائية التي تقدم الخدمة للمستخدم." },
            { question: "What is another name for the Perception Layer?", options: ["The Cloud Layer", "The Sensor Layer", "The App Layer", "The Internet Layer"], answer: 1, hint: "الاسم الآخر يصف وظيفتها الرئيسية وهي استخدام المستشعرات." },
            { question: "Which of the following is NOT an IoT platform mentioned in the lecture?", options: ["AWS IoT", "Microsoft Azure IoT", "Google Cloud IoT", "Adobe Photoshop"], answer: 3, hint: "أدوبي فوتوشوب هو برنامج لتحرير الصور وليس منصة لإنترنت الأشياء." },
            { question: "The business layer in some IoT models is often integrated within the:", options: ["Sensor Layer", "Network Layer", "Application Layer", "Hardware Layer"], answer: 2, hint: "منطق الأعمال وكيفية الاستفادة من بيانات IoT يظهر عادة في طبقة التطبيقات النهائية." },
            { question: "What is the primary challenge related to the Perception Layer?", options: ["High-speed internet", "Power consumption of sensors", "User interface design", "Cloud storage cost"], answer: 1, hint: "أجهزة الاستشعار يجب أن تعمل لفترات طويلة، غالبًا على بطاريات، لذا فإن استهلاك الطاقة أمر بالغ الأهمية." },
            { question: "Which of these is considered an 'actuator'?", options: ["A temperature sensor", "A smart lock", "A humidity sensor", "A light sensor"], answer: 1, hint: "المحرك هو جهاز يقوم بفعل مادي. القفل الذكي يقوم بفعل القفل أو الفتح." },
            { question: "What is a major challenge for the Network Layer in IoT?", options: ["Sensor accuracy", "Data analysis algorithms", "Security of data transmission", "Application design"], answer: 2, hint: "نقل البيانات عبر الشبكات يعرضها لخطر الاختراق، مما يجعل الأمان تحديًا رئيسيًا." },
            { question: "The process of turning raw sensor data into useful information happens in the:", options: ["Perception Layer", "Processing Layer", "User Interface", "Connectivity Layer"], answer: 1, hint: "المعالجة هي التي تحول الأرقام الأولية إلى رؤى قابلة للتنفيذ." },
            { question: "Zigbee and Z-Wave are protocols used in which layer?", options: ["Application Layer", "Network Layer", "Processing Layer", "Data Layer"], answer: 1, hint: "هذه بروتوكولات اتصال لاسلكي منخفضة الطاقة تستخدم لربط الأجهزة ببعضها البعض." },
            { question: "Which layer is responsible for managing the IoT devices themselves?", options: ["Application Layer", "Data Processing Layer", "Network Layer", "Perception Layer"], answer: 3, hint: "هذه الطبقة هي الطبقة المادية التي تتكون من الأجهزة." },
            { question: "What is a key function of the Application Layer?", options: ["Data collection", "Data transmission", "Industry-specific services", "Signal modulation"], answer: 2, hint: "تقدم هذه الطبقة حلولاً لمجالات معينة مثل الزراعة الذكية أو الرعاية الصحية الذكية." },
            { question: "Which component is NOT part of the perception layer?", options: ["Camera", "Robot", "Cloud Database", "Sensors"], answer: 2, hint: "قواعد البيانات السحابية هي جزء من طبقة المعالجة، وليست الطبقة المادية." },
            { question: "The flow of data in IoT architecture is typically:", options: ["Application -> Processing -> Network -> Sensors", "Sensors -> Network -> Processing -> Application", "Network -> Application -> Sensors -> Processing", "Processing -> Network -> Application -> Sensors"], answer: 1, hint: "تبدأ البيانات رحلتها من العالم المادي (المستشعرات) وتصعد عبر الطبقات لتصل إلى المستخدم." }
        ]
    },
    // ============================ Lecture 3: Embedded Systems & MCUs ============================
    {
        id: 3,
        title: "المحاضرة الثالثة: الأنظمة المدمجة والمتحكمات الدقيقة",
        icon: "fa-microchip",
        summary: {
            ar: `
                <h4>ما هي الأنظمة المدمجة (Embedded Systems)؟</h4>
                <p>النظام المدمج هو نظام حاسوبي مصمم لغرض خاص لأداء وظائف محددة ضمن نظام ميكانيكي أو كهربائي أكبر. على عكس أجهزة الكمبيوتر ذات الأغراض العامة، فإن الأنظمة المدمجة لها مهام ثابتة لا يمكن تغييرها بسهولة.</p>
                <h4>خصائص الأنظمة المدمجة:</h4>
                <ul>
                    <li><strong>أحادية الوظيفة:</strong> تنفذ برنامجًا واحدًا بشكل متكرر.</li>
                    <li><strong>مقيدة بشدة:</strong> يجب أن تكون منخفضة التكلفة، تستهلك طاقة قليلة، صغيرة الحجم، وسريعة.</li>
                    <li><strong>تفاعلية وفي الوقت الحقيقي:</strong> تتفاعل باستمرار مع التغيرات في بيئتها ويجب أن تستجيب دون تأخير.</li>
                </ul>
                <h4>المتحكم الدقيق (Microcontroller - MCU)</h4>
                <p>المتحكم الدقيق هو كمبيوتر صغير على شريحة واحدة (System-on-a-Chip). يحتوي على وحدة معالجة مركزية (CPU)، ذاكرة (RAM و ROM)، ومنافذ إدخال/إخراج قابلة للبرمجة. إنه قلب معظم الأنظمة المدمجة.</p>
                <h4>الفرق بين المعالج الدقيق (Microprocessor) والمتحكم الدقيق (Microcontroller):</h4>
                <p>المعالج الدقيق هو مجرد وحدة معالجة مركزية (CPU) ويحتاج إلى مكونات خارجية مثل الذاكرة ومنافذ الإدخال/الإخراج ليعمل. أما المتحكم الدقيق، فيحتوي على كل هذه المكونات مدمجة في شريحة واحدة، مما يجعله أرخص وأصغر ومثاليًا للأنظمة المدمجة.</p>
            `,
            en: `
                <h4>What are Embedded Systems?</h4>
                <p>An embedded system is a special-purpose computer system designed to perform dedicated functions within a larger mechanical or electrical system. Unlike general-purpose computers, embedded systems have fixed tasks that cannot be easily changed.</p>
                <h4>Characteristics of Embedded Systems:</h4>
                <ul>
                    <li><strong>Single-functioned:</strong> Executes a single program repeatedly.</li>
                    <li><strong>Tightly-constrained:</strong> Must be low cost, low power, small, and fast.</li>
                    <li><strong>Reactive and real-time:</strong> Continuously reacts to changes in its environment and must respond without delay.</li>
                </ul>
                <h4>Microcontroller (MCU)</h4>
                <p>A microcontroller is a small computer on a single chip (System-on-a-Chip). It contains a Central Processing Unit (CPU), memory (RAM and ROM), and programmable Input/Output (I/O) peripherals. It is the heart of most embedded systems.</p>
                <h4>Difference between Microprocessor and Microcontroller:</h4>
                <p>A microprocessor is just a CPU and needs external components like memory and I/O ports to function. A microcontroller, however, has all these components integrated onto a single chip, making it cheaper, smaller, and ideal for embedded systems.</p>
            `
        },
        quiz: [
            { question: "An embedded system is designed for a:", options: ["General purpose", "Specific, dedicated function", "Variety of tasks", "No function at all"], answer: 1, hint: "الأنظمة المدمجة تكون مخصصة لمهمة واحدة محددة، مثل التحكم في غسالة الملابس." },
            { question: "Which is a key characteristic of an embedded system?", options: ["High cost and large size", "Low power consumption and low cost", "General purpose software", "Requires user programming daily"], answer: 1, hint: "الكفاءة من حيث التكلفة والطاقة والحجم هي من أهم متطلبات تصميمها." },
            { question: "What is a Microcontroller (MCU)?", options: ["A large mainframe computer", "A software program", "A computer on a single chip", "A type of display screen"], answer: 2, hint: "يُعرف المتحكم الدقيق بأنه نظام متكامل على شريحة واحدة (SoC)." },
            { question: "What is the main difference between a microprocessor and a microcontroller?", options: ["There is no difference", "A microprocessor is faster", "A microcontroller has integrated memory and I/O peripherals", "A microprocessor has more memory"], answer: 2, hint: "المتحكم الدقيق هو حل 'شامل' يحتوي على كل شيء، بينما المعالج يحتاج إلى مكونات إضافية." },
            { question: "Which component is typically found inside a microcontroller but NOT inside a standalone microprocessor chip?", options: ["CPU", "ALU (Arithmetic Logic Unit)", "RAM and ROM", "Registers"], answer: 2, hint: "الذاكرة ومنافذ الإدخال/الإخراج تكون خارجية للمعالج ولكنها مدمجة في المتحكم." },
            { question: "The term 'Real-time' in embedded systems means:", options: ["The system is very fast", "The system responds to events within a strict time constraint", "The system can tell the current time", "The system is always on"], answer: 1, hint: "الاستجابة الفورية والحتمية للأحداث الخارجية هي جوهر أنظمة الوقت الحقيقي، مثل نظام الفرامل في السيارة." },
            { question: "ATmega16 is an example of a:", options: ["Microprocessor", "Microcontroller", "FPGA", "Hard Drive"], answer: 1, hint: "هذه الشريحة من عائلة AVR وهي متحكم دقيق شائع الاستخدام." },
            { question: "What does DDRx register control in an AVR microcontroller?", options: ["Data value of the port", "Data Direction (Input/Output) of the port", "The clock speed", "The memory address"], answer: 1, hint: "DDR تعني Data Direction Register، ووظيفتها تحديد ما إذا كان المنفذ مدخلًا أم مخرجًا." },
            { question: "To set a pin as an output in an AVR microcontroller, you set its corresponding DDR bit to:", options: ["0", "1", "Can be 0 or 1", "You don't use the DDR register"], answer: 1, hint: "1 للخارج (Output)، 0 للداخل (Input)." },
            { question: "Which register is used to READ the state of a pin configured as an input?", options: ["PORTx", "DDRx", "PINx", "ADC"], answer: 2, hint: "لقراءة قيمة المنفذ، نستخدم سجل PINx." },
            { question: "What is the purpose of a 'pull-up' resistor on an input pin?", options: ["To increase current", "To ensure the pin reads a defined HIGH state when not connected", "To slow down the processor", "To decrease voltage"], answer: 1, hint: "تمنع هذه المقاومة الحالة 'العائمة' (Floating) غير المحددة للمدخل." },
            { question: "Which company developed the AVR family of microcontrollers?", options: ["Intel", "AMD", "Atmel", "Nvidia"], answer: 2, hint: "Atmel (التي استحوذت عليها Microchip لاحقًا) هي الشركة الأصلية المطورة لهذه العائلة." },
            { question: "In ATmega16, what does '16' typically refer to?", options: ["16 KB of RAM", "16 MHz clock speed", "16 KB of Flash memory", "16 I/O pins"], answer: 2, hint: "الرقم في اسم المتحكم غالبًا ما يشير إلى حجم ذاكرة البرنامج (Flash)." },
            { question: "An embedded system in a washing machine is an example of a:", options: ["General-purpose system", "Single-functioned system", "High-performance computing system", "Network server"], answer: 1, hint: "وظيفتها مخصصة فقط للتحكم في دورات الغسيل." },
            { question: "To write a HIGH or LOW value to an output pin, which register do you use?", options: ["PINx", "DDRx", "PORTx", "STATUS"], answer: 2, hint: "لإخراج البيانات (كتابة قيمة)، نستخدم سجل PORTx." },
            { question: "Harvard architecture, used in AVR, has:", options: ["A single bus for data and instructions", "Separate buses for data and instructions", "No buses", "Only a data bus"], answer: 1, hint: "وجود مسارات منفصلة للبيانات والتعليمات يسمح بجلب التعليمات وتنفيذها في نفس الوقت، مما يزيد السرعة." },
            { question: "What does 'Volatile' memory mean?", options: ["It retains data without power", "It is very fast", "It loses its data when power is turned off", "It is programmable"], answer: 2, hint: "الذاكرة المتطايرة (مثل RAM) تحتاج إلى طاقة للاحتفاظ بالبيانات." },
            { question: "Which type of memory is used to store the program code in a microcontroller?", options: ["RAM", "EEPROM", "Flash Memory (ROM)", "Cache"], answer: 2, hint: "ذاكرة البرنامج يجب أن تكون غير متطايرة لتحتفظ بالبرنامج حتى بعد فصل الطاقة." },
            { question: "If you configure a pin as input (DDRx.n = 0) and then write 1 to its PORTx.n bit, what happens?", options: ["The pin becomes an output", "Nothing happens", "The internal pull-up resistor is activated", "The microcontroller resets"], answer: 2, hint: "هذه هي الطريقة لتفعيل مقاومة الرفع الداخلية للمدخل." },
            { question: "Which of the following is an advantage of a microcontroller over a microprocessor for an IoT device?", options: ["Higher processing power", "Ability to run complex operating systems", "Lower cost and smaller size", "More expandability"], answer: 2, hint: "لأن أجهزة IoT غالبًا ما تكون صغيرة ومقيدة بالتكلفة، فإن الطبيعة المدمجة للمتحكمات تجعلها الخيار الأفضل." }
        ]
    },
    // ============================ Lecture 4: Cloud & Big Data ============================
    {
        id: 4,
        title: "المحاضرة الرابعة: السحابة والبيانات الضخمة",
        icon: "fa-cloud-database",
        summary: {
            ar: `
                <h4>الحوسبة السحابية (Cloud Computing)</h4>
                <p>تشير "السحابة" إلى خوادم يتم الوصول إليها عبر الإنترنت، والبرامج وقواعد البيانات التي تعمل على تلك الخوادم. تسمح الحوسبة السحابية للمستخدمين والشركات بتخزين البيانات وتشغيل التطبيقات على بنية تحتية بعيدة بدلاً من أجهزتهم المحلية.</p>
                <h4>الحوسبة الضبابية (Fog Computing)</h4>
                <p>الحوسبة الضبابية هي بنية تحتية لا مركزية تضع مكونات التخزين والمعالجة "على حافة" السحابة، بالقرب من مصادر البيانات. هذا يقلل من زمن الوصول (latency) ويحسن الاستجابة للتطبيقات التي تتطلب قرارات سريعة.</p>
                <h4>مقارنة بين السحابة والضباب:</h4>
                <ul>
                    <li><strong>المعمارية:</strong> السحابة مركزية، بينما الضباب موزع.</li>
                    <li><strong>زمن الوصول:</strong> السحابة لديها زمن وصول أعلى، والضباب أقل.</li>
                    <li><strong>الموقع:</strong> معالجة السحابة بعيدة، بينما معالجة الضباب قريبة من الجهاز.</li>
                </ul>
                <h4>البيانات الضخمة (Big Data)</h4>
                <p>هي البيانات التي تتميز بكونها ذات تنوع أكبر، وتصل بكميات متزايدة، وبسرعة أعلى. وتُعرف بـ "Three Vs":</p>
                <ul>
                    <li><strong>الحجم (Volume):</strong> كميات هائلة من البيانات.</li>
                    <li><strong>السرعة (Velocity):</strong> سرعة توليد البيانات وتدفقها.</li>
                    <li><strong>التنوع (Variety):</strong> أشكال مختلفة من البيانات (منظمة، غير منظمة).</li>
                </ul>
                <p>إنترنت الأشياء هو مصدر رئيسي للبيانات الضخمة، حيث تولد مليارات الأجهزة بيانات بشكل مستمر.</p>
            `,
            en: `
                <h4>Cloud Computing</h4>
                <p>"The Cloud" refers to servers that are accessed over the Internet, and the software and databases that run on those servers. Cloud computing allows users and companies to store data and run applications on remote infrastructure instead of on their local devices.</p>
                <h4>Fog Computing</h4>
                <p>Fog computing is a decentralized infrastructure that places storage and processing components at the "edge" of the cloud, closer to the data sources. This reduces latency and improves response time for applications requiring quick decisions.</p>
                <h4>Cloud vs. Fog Comparison:</h4>
                <ul>
                    <li><strong>Architecture:</strong> Cloud is centralized, while Fog is distributed.</li>
                    <li><strong>Latency:</strong> Cloud has higher latency, Fog has lower.</li>
                    <li><strong>Location:</strong> Cloud processing is remote, while Fog processing is close to the device.</li>
                </ul>
                <h4>Big Data</h4>
                <p>Big Data is data that contains greater variety, arriving in increasing volumes and with more velocity. It's known by the "Three Vs":</p>
                <ul>
                    <li><strong>Volume:</strong> Massive amounts of data.</li>
                    <li><strong>Velocity:</strong> The high speed at which data is generated and flows.</li>
                    <li><strong>Variety:</strong> Different forms of data (structured, unstructured).</li>
                </ul>
                <p>IoT is a major source of Big Data, as billions of devices continuously generate data.</p>
            `
        },
        quiz: [
            { question: "What does 'The Cloud' refer to in computing?", options: ["A weather phenomenon", "A single personal computer", "Servers, software, and databases accessed over the Internet", "A type of local network"], answer: 2, hint: "السحابة هي بنية تحتية ضخمة من الخوادم المتصلة عالميًا." },
            { question: "Which of the following is a benefit of cloud computing for individuals?", options: ["It makes your computer heavier", "It frees up local hard drive space", "It requires you to download all applications", "It only works on one device"], answer: 1, hint: "بدلاً من تخزين الملفات على جهازك، يمكنك تخزينها عبر الإنترنت." },
            { question: "Fog computing places processing power closer to the:", options: ["Center of the cloud", "Data source (edge devices)", "Mainframe computer", "End user's home"], answer: 1, hint: "الضباب هو امتداد للسحابة، ولكنه يقع عند 'حافة' الشبكة." },
            { question: "What is the main advantage of Fog Computing over Cloud Computing?", options: ["Higher storage capacity", "Centralized architecture", "Lower latency", "Higher cost"], answer: 2, hint: "القرب من مصدر البيانات يقلل من تأخير الاستجابة بشكل كبير." },
            { question: "The 'Three Vs' of Big Data are:", options: ["Volume, Velocity, Variety", "Value, Vision, Virtue", "Very, Very, Very Big", "Voice, Video, Veracity"], answer: 0, hint: "هذه هي الخصائص الثلاث الرئيسية التي تعرف البيانات الضخمة." },
            { question: "The 'Volume' in Big Data refers to:", options: ["The loudness of the data", "The format of the data", "The speed of the data", "The large amount of data"], answer: 3, hint: "الحجم يتعلق بكمية البيانات التي يتم إنشاؤها وتخزينها." },
            { question: "Which 'V' describes the different formats of data (e.g., text, images, video)?", options: ["Volume", "Velocity", "Variety", "Value"], answer: 2, hint: "التنوع يشير إلى الأشكال المختلفة التي يمكن أن تأتي بها البيانات." },
            { question: "IoT is a major generator of:", options: ["Small data", "Big Data", "No data", "Slow data"], answer: 1, hint: "مليارات الأجهزة المتصلة تنتج كميات هائلة من البيانات باستمرار." },
            { question: "Compared to Fog computing, Cloud computing has:", options: ["Lower latency", "Higher latency", "No latency", "Distributed architecture"], answer: 1, hint: "بسبب المسافة التي تقطعها البيانات، يكون لدى السحابة زمن وصول أعلى." },
            { question: "What is Data Mining?", options: ["Physically digging for data", "The process of searching and analyzing large datasets to find patterns", "Deleting old data", "A type of network"], answer: 1, hint: "التنقيب في البيانات هو استخراج 'المعرفة' القيمة من كميات كبيرة من البيانات." },
            { question: "Which type of chart is best for showing data changes over time?", options: ["Pie Chart", "Bar Chart", "Line Chart", "Scatter Plot"], answer: 2, hint: "الرسم البياني الخطي يربط النقاط بمرور الوقت لإظهار الاتجاهات." },
            { question: "A company that wants to reduce its on-site IT equipment would benefit from:", options: ["Buying more servers", "Cloud Computing", "Fog Computing only", "Hiring more IT staff"], answer: 1, hint: "تسمح السحابة للشركات 'باستئجار' البنية التحتية بدلاً من شرائها وإدارتها." },
            { question: "Which scenario is better suited for Fog Computing?", options: ["Long-term data archiving", "A self-driving car needing to make instant decisions", "Running a large social media platform", "Storing family photos"], answer: 1, hint: "السيارات ذاتية القيادة تتطلب استجابة فورية، وهو ما توفره الحوسبة الضبابية." },
            { question: "A dataset containing text from social media, sensor readings, and video files is an example of:", options: ["High Volume", "High Velocity", "High Variety", "High Value"], answer: 2, hint: "وجود أنواع متعددة من البيانات (نص، أرقام، فيديو) هو مثال على التنوع." },
            { question: "Security is a major concern in:", options: ["Cloud Computing only", "Big Data only", "Both Cloud Computing and Big Data", "Neither"], answer: 2, hint: "تأمين كميات هائلة من البيانات المخزنة على خوادم بعيدة هو تحدٍ كبير." },
            { question: "What does 'Data Visualization' mean?", options: ["Writing data down", "Presenting data in a graphical or pictorial format", "Hiding data", "Encrypting data"], answer: 1, hint: "الرسوم البيانية والمخططات هي أدوات لتصور البيانات وفهمها بسهولة." },
            { question: "Which network type connects devices across a city?", options: ["PAN (Personal Area Network)", "LAN (Local Area Network)", "MAN (Metropolitan Area Network)", "WAN (Wide Area Network)"], answer: 2, hint: "الشبكة الحضرية (MAN) تغطي منطقة جغرافية أكبر من الشبكة المحلية ولكن أصغر من الشبكة الواسعة." },
            { question: "The global network of computers that we call the Internet is an example of a:", options: ["PAN", "LAN", "MAN", "WAN"], answer: 3, hint: "الإنترنت هو أكبر شبكة واسعة النطاق، حيث يربط الشبكات في جميع أنحاء العالم." },
            { question: "What is a major problem in managing Big Data?", options: ["Having too little data", "Organizing data from many different sources", "Data that is too simple", "Data that never changes"], answer: 1, hint: "إدارة وتنظيم البيانات القادمة من مصادر متنوعة وبأشكال مختلفة يمثل تحديًا كبيرًا." },
            { question: "Which of these is NOT a primary characteristic of Fog computing?", options: ["Low latency", "Decentralized", "Close to the data source", "Long-term, deep analysis"], answer: 3, hint: "الحوسبة الضبابية تركز على التحليل السريع وقصير المدى، بينما التحليل العميق طويل المدى يتم عادة في السحابة." }
        ]
    },
    // ============================ Lecture 5: Automation and Machine Learning ============================
    {
        id: 5,
        title: "المحاضرة الخامسة: الأتمتة وتعلم الآلة",
        icon: "fa-robot",
        summary: {
            ar: `
                <h4>الأتمتة (Automation)</h4>
                <p>الأتمتة هي أي عملية تتم بشكل ذاتي وتقلل من الحاجة إلى التدخل البشري. الهدف منها هو زيادة الإنتاجية والجودة، تقليل التكاليف، وزيادة الأمان. في سياق إنترنت الأشياء، تسمح الأتمتة للأجهزة بالعمل معًا بشكل مستقل لاتخاذ قرارات وتنفيذ إجراءات، مثل ضبط منظم الحرارة تلقائيًا بناءً على وجودك في المنزل.</p>
                <h4>تعلم الآلة (Machine Learning)</h4>
                <p>تعلم الآلة هو فرع من الذكاء الاصطناعي يهتم ببرامج الحاسوب التي تحسن أداءها تلقائيًا من خلال الخبرة. بدلاً من برمجة القواعد بشكل صريح، يتم "تدريب" الخوارزميات على مجموعة كبيرة من البيانات لتتعلم الأنماط وتتخذ القرارات.</p>
                <ul>
                    <li><strong>التعلم الخاضع للإشراف (Supervised Learning):</strong> يتم تدريب النموذج على بيانات مصنفة (labeled data). الهدف هو التنبؤ بالتصنيف لبيانات جديدة. (مثال: تصنيف رسائل البريد الإلكتروني إلى عادية أو مزعجة).</li>
                    <li><strong>التعلم غير الخاضع للإشراف (Unsupervised Learning):</strong> يتم تدريب النموذج على بيانات غير مصنفة. الهدف هو اكتشاف الأنماط أو التجمعات (clusters) المخفية في البيانات.</li>
                </ul>
                <p>في إنترنت الأشياء، يُستخدم تعلم الآلة لتحليل بيانات المستشعرات، التنبؤ بالأعطال، والتعرف على الأنماط السلوكية.</p>
            `,
            en: `
                <h4>Automation</h4>
                <p>Automation is any process that is self-driven and reduces the need for human intervention. Its goal is to increase productivity and quality, reduce costs, and increase safety. In the context of IoT, automation allows devices to work together autonomously to make decisions and perform actions, such as automatically adjusting a thermostat based on your presence at home.</p>
                <h4>Machine Learning (ML)</h4>
                <p>Machine Learning is a branch of artificial intelligence concerned with computer programs that automatically improve their performance through experience. Instead of being explicitly programmed with rules, algorithms are 'trained' on large sets of data to learn patterns and make decisions.</p>
                <ul>
                    <li><strong>Supervised Learning:</strong> The model is trained on labeled data. The goal is to predict the label for new data. (Example: Classifying emails as spam or not spam).</li>
                    <li><strong>Unsupervised Learning:</strong> The model is trained on unlabeled data. The goal is to discover hidden patterns or clusters in the data.</li>
                </ul>
                <p>In IoT, Machine Learning is used to analyze sensor data, predict failures, and recognize behavioral patterns.</p>
            `
        },
        quiz: [
            { question: "What is the main goal of automation?", options: ["To increase human intervention", "To reduce productivity", "To reduce the need for human control", "To make processes more complex"], answer: 2, hint: "الهدف هو جعل المهام تتم بشكل تلقائي." },
            { question: "Machine Learning is a subfield of which broader field?", options: ["Data Storage", "Networking", "Artificial Intelligence (AI)", "Graphic Design"], answer: 2, hint: "تعلم الآلة هو أحد فروع الذكاء الاصطناعي الذي يركز على تمكين الأنظمة من التعلم من البيانات." },
            { question: "What is the key difference between Traditional Programming and Machine Learning?", options: ["ML uses data to create the program", "Traditional programming uses more data", "ML does not produce an output", "There is no difference"], answer: 0, hint: "في البرمجة التقليدية، نكتب القواعد. في تعلم الآلة، الآلة تتعلم القواعد من البيانات." },
            { question: "In which type of learning is the model trained on data with labels?", options: ["Unsupervised Learning", "Supervised Learning", "Reinforcement Learning", "Automated Learning"], answer: 1, hint: "وجود 'إشراف' يعني أن البيانات التدريبية تحتوي على الإجابات الصحيحة (التصنيفات)." },
            { question: "Email spam filtering is a classic example of:", options: ["Unsupervised Learning", "Supervised Learning (Classification)", "Data Storage", "Hardware Design"], answer: 1, hint: "يتم تدريب النظام على أمثلة من رسائل البريد العشوائي والرسائل العادية." },
            { question: "The goal of Unsupervised Learning is often to:", options: ["Predict a specific value", "Follow explicit instructions", "Discover hidden clusters or patterns in data", "Verify existing labels"], answer: 2, hint: "عندما لا تكون لدينا تصنيفات مسبقة، نحاول إيجاد مجموعات متشابهة داخل البيانات." },
            { question: "Which of these is NOT a benefit of automation?", options: ["Increased efficiency", "Reduced costs", "Increased human error", "Improved accuracy"], answer: 2, hint: "الأتمتة تهدف إلى تقليل الأخطاء البشرية، وليس زيادتها." },
            { question: "What does a machine learning model 'learn' from?", options: ["Electricity", "Air", "Experience (Data)", "User opinions"], answer: 2, hint: "البيانات هي 'الخبرة' التي يستخدمها نموذج تعلم الآلة لتحسين أدائه." },
            { question: "Identifying groups of customers with similar purchasing habits is an example of:", options: ["Supervised Learning", "Unsupervised Learning (Clustering)", "Traditional Programming", "Automation"], answer: 1, hint: "نحن لا نعرف المجموعات مسبقًا، بل نطلب من الخوارزمية اكتشافها." },
            { question: "Predicting a house price based on its features (size, location) is an example of:", options: ["Supervised Learning (Regression)", "Unsupervised Learning", "Automation", "Data Visualization"], answer: 0, hint: "عندما يكون الهدف هو التنبؤ بقيمة رقمية مستمرة، فهذا يسمى 'الانحدار' (Regression)، وهو نوع من التعلم المشرف." },
            { question: "What is the 'training data' in machine learning?", options: ["The program's final code", "The data used to teach the model", "The new data the model has never seen", "The hardware specifications"], answer: 1, hint: "هي مجموعة البيانات الأولية التي تستخدم لبناء النموذج وتدريبه." },
            { question: "An automated system in a smart factory that improves its own processes is an example of:", options: ["Industry 4.0", "Web 2.0", "Simple Manufacturing", "Manual Labor"], answer: 0, hint: "الثورة الصناعية الرابعة (Industry 4.0) تتميز بالمصانع الذكية والأتمتة المتقدمة." },
            { question: "Amazon Alexa and Google Assistant are examples of automation in:", options: ["Manufacturing", "Smart Homes", "Healthcare", "Transportation"], answer: 1, hint: "هذه الأنظمة تسمح بالتحكم في الأجهزة المنزلية صوتيًا." },
            { question: "What is a 'label' in the context of supervised learning?", options: ["The name of the algorithm", "A sticker on the computer", "The correct answer or category for a piece of training data", "A type of sensor"], answer: 2, hint: "التصنيف هو الجواب الصحيح الذي نريد من النموذج أن يتعلم التنبؤ به." },
            { question: "The main goal when fitting a line to data points in regression is to:", options: ["Connect all points perfectly", "Pass through the first and last points", "Maximize the error", "Minimize the error between the line and the points"], answer: 3, hint: "نريد أن يكون الخط 'أفضل تمثيل' للبيانات، أي أقرب ما يمكن لجميع النقاط." },
            { question: "Which of the following is an application of Machine Learning?", options: ["Google Translate", "Gmail Smart Reply", "Spam Filtering", "All of the above"], answer: 3, hint: "كل هذه الخدمات تعتمد بشكل كبير على نماذج تعلم الآلة لفهم اللغة والتنبؤ بها." },
            { question: "Using technology to automatically perform medical tests and assist in diagnosis is an application of:", options: ["Manual data entry", "Automation and AI in healthcare", "Retail automation", "Social media"], answer: 1, hint: "يمكن للآلات تحليل الصور والفحوصات الطبية بدقة قد تفوق الإنسان في بعض الحالات." },
            { question: "What is the 'knowledge engineering bottleneck'?", options: ["A lack of data", "The difficulty of manually creating complex sets of rules for a system", "A hardware limitation", "A slow network connection"], answer: 1, hint: "تعلم الآلة يساعد في التغلب على هذه المشكلة بجعل النظام يتعلم القواعد بنفسه." },
            { question: "Which of these is NOT a primary goal of Machine Learning?", options: ["Discovering new knowledge from data", "Replacing tasks that require intelligence", "Developing systems that adapt to users", "Creating programs that never change"], answer: 3, hint: "القدرة على التكيف والتحسين مع مرور الوقت هي من صميم تعلم الآلة." },
            { question: "Self-serve kiosks in fast-food restaurants are a form of:", options: ["Machine Learning", "Automation", "Cloud Computing", "Data Mining"], answer: 1, hint: "هذه الأكشاك تقوم بمهمة كانت تتطلب تدخلاً بشريًا (أخذ الطلبات)." }
        ]
    },
    // ============================ Lecture 6: IoT Processing and Components ============================
    {
        id: 6,
        title: "المحاضرة السادسة: معالجة إنترنت الأشياء ومكوناته",
        icon: "fa-memory",
        summary: {
            ar: `
                <h4>وحدات المعالجة في إنترنت الأشياء</h4>
                <p>وحدة المعالجة هي "عقل" جهاز إنترنت الأشياء. هناك العديد من الخيارات المتاحة، ولكل منها نقاط قوة مختلفة.</p>
                <ul>
                    <li><strong>Arduino (مثل Uno, Mega):</strong> متحكمات دقيقة ممتازة للمبتدئين والمهام البسيطة. تكلفتها منخفضة وتستهلك طاقة قليلة، لكن قدرتها على المعالجة محدودة.</li>
                    <li><strong>Raspberry Pi:</strong> كمبيوتر صغير أحادي اللوحة (SBC). أقوى بكثير من الأردوينو، يمكنه تشغيل نظام تشغيل كامل (مثل Linux)، ومناسب للمهام المعقدة التي تتطلب معالجة بيانات أو تشغيل خادم ويب.</li>
                    <li><strong>ESP8266 / ESP32:</strong> شرائح منخفضة التكلفة مع Wi-Fi مدمج (و Bluetooth في ESP32). إنها الخيار الأمثل لمشاريع IoT التي تحتاج إلى اتصال لاسلكي مباشر بالإنترنت دون الحاجة إلى قوة Raspberry Pi الكاملة.</li>
                </ul>
                <h4>مكونات الإخراج الشائعة (Actuators & Displays)</h4>
                <ul>
                    <li><strong>شاشات الكريستال السائل (LCD):</strong> تستخدم لعرض النصوص والأرقام، وتوفر واجهة مستخدم بسيطة.</li>
                    <li><strong>المحركات (Motors):</strong>
                        <ul>
                            <li><strong>DC Motor:</strong> للتشغيل المستمر، يتم التحكم في سرعته واتجاهه.</li>
                            <li><strong>Servo Motor:</strong> للدوران إلى زاوية محددة بدقة (0-180 درجة).</li>
                            <li><strong>Stepper Motor:</strong> للدوران في خطوات دقيقة يمكن التحكم فيها.</li>
                        </ul>
                    </li>
                    <li><strong>شاشات OLED:</strong> شاشات عرض ذات تباين عالٍ واستهلاك منخفض للطاقة، ومناسبة للرسومات.</li>
                    <li><strong>RFID/NFC:</strong> تستخدم للتعرف على الهوية والتحكم في الوصول لاسلكيًا.</li>
                    <li><strong>Bluetooth Modules (مثل HC-05):</strong> لإضافة اتصال بلوتوث للمشاريع.</li>
                </ul>
            `,
            en: `
                <h4>Processing Units in IoT</h4>
                <p>The processing unit is the "brain" of an IoT device. There are many options available, each with different strengths.</p>
                <ul>
                    <li><strong>Arduino (e.g., Uno, Mega):</strong> Excellent microcontrollers for beginners and simple tasks. They are low-cost and low-power but have limited processing capability.</li>
                    <li><strong>Raspberry Pi:</strong> A single-board computer (SBC). It is much more powerful than an Arduino, can run a full operating system (like Linux), and is suitable for complex tasks requiring data processing or running a web server.</li>
                    <li><strong>ESP8266 / ESP32:</strong> Low-cost chips with built-in Wi-Fi (and Bluetooth in the ESP32). They are the perfect choice for IoT projects that need direct wireless internet connectivity without the full power of a Raspberry Pi.</li>
                </ul>
                <h4>Common Output Components (Actuators & Displays)</h4>
                <ul>
                    <li><strong>LCDs (Liquid Crystal Displays):</strong> Used to display text and numbers, providing a simple user interface.</li>
                    <li><strong>Motors:</strong>
                        <ul>
                            <li><strong>DC Motor:</strong> For continuous rotation, speed and direction are controllable.</li>
                            <li><strong>Servo Motor:</strong> For rotating to a precise angle (0-180 degrees).</li>
                            <li><strong>Stepper Motor:</strong> For rotating in precise, controllable steps.</li>
                        </ul>
                    </li>
                    <li><strong>OLED Displays:</strong> High-contrast, low-power displays suitable for graphics.</li>
                    <li><strong>RFID/NFC:</strong> Used for wireless identification and access control.</li>
                    <li><strong>Bluetooth Modules (e.g., HC-05):</strong> For adding Bluetooth connectivity to projects.</li>
                </ul>
            `
        },
        quiz: [
            { question: "Which processing unit is a full Single-Board Computer (SBC) capable of running Linux?", options: ["Arduino Uno", "ESP8266", "Raspberry Pi", "ATmega328P"], answer: 2, hint: "هذا الجهاز هو كمبيوتر كامل في حجم بطاقة الائتمان." },
            { question: "What is the primary advantage of the ESP8266 and ESP32 chips for IoT?", options: ["They have the most processing power", "They have built-in Wi-Fi", "They are the largest in size", "They do not require programming"], answer: 1, hint: "الميزة الرئيسية التي جعلتها شائعة جدًا في إنترنت الأشياء هي الاتصال اللاسلكي المدمج." },
            { question: "For a simple task like blinking an LED, which board is the most cost-effective and suitable choice?", options: ["Raspberry Pi 4", "Arduino Uno", "A high-end server", "ESP32-CAM"], answer: 1, hint: "الأردوينو مثالي للمهام البسيطة والمباشرة وهو خيار اقتصادي." },
            { question: "Which type of motor is best for rotating to a specific, precise angle like 90 degrees?", options: ["DC Motor", "Servo Motor", "Stepper Motor", "Induction Motor"], answer: 1, hint: "محركات السيرفو مصممة للتحكم الدقيق في الموضع الزاوي." },
            { question: "What does an L298N module do?", options: ["It connects to Wi-Fi", "It drives motors, controlling their speed and direction", "It displays text", "It measures temperature"], answer: 1, hint: "لا يمكن للأردوينو توفير التيار الكافي للمحركات مباشرة، لذلك نستخدم 'درايفر' أو مشغل." },
            { question: "A joystick provides what kind of input to an Arduino?", options: ["Digital input only", "Analog input for X/Y axes and a digital input for the button", "Temperature readings", "Light level"], answer: 1, hint: "توفر المقاومات المتغيرة بداخلها قراءات تناظرية للحركة على محورين." },
            { question: "What is a key feature of OLED displays compared to LCDs?", options: ["They are always larger", "They have lower contrast and are harder to read", "They have higher contrast and don't require a backlight", "They can only display numbers"], answer: 2, hint: "شاشات OLED تضيء ذاتيًا، مما يوفر تباينًا أفضل واستهلاكًا أقل للطاقة." },
            { question: "RFID technology is used for:", options: ["Measuring distance", "Generating sound", "Wireless identification and access control", "Controlling motors"], answer: 2, hint: "فكر في بطاقات الدخول للفنادق أو أنظمة الدفع بدون لمس." },
            { question: "What kind of signal does Arduino use to control the speed of a DC motor or the position of a servo?", options: ["AC (Alternating Current)", "A constant high voltage signal", "PWM (Pulse Width Modulation)", "A text message"], answer: 2, hint: "عن طريق تغيير عرض النبضة، يمكن التحكم في الطاقة المرسلة إلى المحرك." },
            { question: "An ESP32-CAM board uniquely includes:", options: ["A motor driver", "An LCD screen", "A camera module", "A GPS module"], answer: 2, hint: "الاسم 'CAM' يشير إلى وظيفتها الرئيسية." },
            { question: "Which board would be most suitable for a project that needs to process live video from a camera and send it over Wi-Fi?", options: ["Arduino Uno", "A simple LED", "Raspberry Pi or ESP32-CAM", "A DC motor"], answer: 2, hint: "هذه المهمة تتطلب قوة معالجة كبيرة واتصال واي فاي، وهي متوفرة في هذين الخيارين." },
            { question: "What are the three wires on a typical servo motor for?", options: ["Power, Ground, and Wi-Fi", "Power, Ground, and Signal", "USB, Ethernet, and HDMI", "Red, Green, and Blue"], answer: 1, hint: "تحتاج إلى طاقة (VCC)، أرضي (GND)، وإشارة تحكم (Signal)." },
            { question: "What does the 'I2C' protocol, used by some OLEDs, allow?", options: ["Very long-distance communication", "Communication using many wires", "Communication between multiple devices using only two wires (SDA and SCL)", "Wireless communication only"], answer: 2, hint: "هذا البروتوكول فعال جداً لأنه يقلل من عدد الأسلاك اللازمة لتوصيل الأجهزة." },
            { question: "Which component converts digital signals from the Arduino back into an action in the physical world?", options: ["Sensor", "Actuator", "Power Supply", "Code"], answer: 1, hint: "المحركات والشاشات والأضواء كلها أمثلة على المحركات (Actuators)." },
            { question: "The Arduino Mega is different from the Uno primarily because it has:", options: ["Less processing power", "A built-in camera", "More I/O pins and more memory", "A smaller size"], answer: 2, hint: "يتم استخدام Mega في المشاريع الكبيرة التي تتطلب توصيل عدد كبير من المستشعرات والمحركات." },
            { question: "If your IoT project needs to be very small and connect to your home Wi-Fi to send a temperature reading, what's a good choice?", options: ["Raspberry Pi", "Arduino Uno", "ESP8266/ESP32", "A large server"], answer: 2, hint: "هذه الشرائح صغيرة، رخيصة، ومصممة خصيصًا لهذا النوع من مهام إنترنت الأشياء." },
            { question: "Which motor moves in discrete, controllable steps?", options: ["DC Motor", "Servo Motor", "Stepper Motor", "AC Motor"], answer: 2, hint: "المحرك الخُطوي (Stepper) مثالي للحركة الدقيقة والمتكررة، مثل حركة الطابعات ثلاثية الأبعاد." },
            { question: "The HC-05 is a popular module for adding what capability to an Arduino?", options: ["Wi-Fi", "GPS", "Ethernet", "Bluetooth"], answer: 3, hint: "يسمح هذا النموذج بالاتصال اللاسلكي قصير المدى مع الهواتف الذكية والأجهزة الأخرى." },
            { question: "To display multiple lines of text information for a user, which component is most suitable?", options: ["An LED", "A Buzzer", "An LCD screen", "A single button"], answer: 2, hint: "شاشات LCD مصممة خصيصًا لعرض المعلومات النصية." },
            { question: "Why can't an Arduino pin directly power a DC motor?", options: ["The voltage is too high", "The current supplied by the pin is too low", "The pin provides AC power", "The motor requires Wi-Fi"], answer: 1, hint: "يمكن لمنافذ الأردوينو توفير تيار صغير جدًا (ملي أمبير)، بينما تحتاج المحركات إلى تيار أعلى بكثير." }
        ]
    }
];

const tutorialsData = [
    {
        id: "T1",
        title: "Tutorial 1: Microcontroller (MCU) Basics",
        icon: "fa-microchip",
        summary: {
            ar: `
                <h3>أساسيات المتحكمات الدقيقة (Microcontrollers - MCUs):</h3>
                <p>المتحكم الدقيق هو كمبيوتر صغير على شريحة واحدة، مصمم لأداء وظائف محددة في نظام مدمج. يدمج وحدة المعالجة المركزية (CPU)، الذاكرة (RAM و ROM)، ومنافذ الإدخال/الإخراج (I/O) في شريحة واحدة. هذا يجعله فعالاً من حيث التكلفة والحجم والطاقة، مما يجعله مثاليًا للتطبيقات المخصصة.</p>
                <h4>المكونات الرئيسية للمتحكم الدقيق:</h4>
                <ul>
                    <li><strong>وحدة المعالجة المركزية (CPU):</strong> تقوم بتنفيذ التعليمات والعمليات الحسابية والمنطقية.</li>
                    <li><strong>الذاكرة:</strong>
                        <ul>
                            <li><strong>ذاكرة البرنامج (Program Memory - ROM/Flash):</strong> لتخزين الكود بشكل دائم. غير متطايرة.</li>
                            <li><strong>ذاكرة البيانات (Data Memory - RAM):</strong> لتخزين البيانات المؤقتة. متطايرة.</li>
                        </ul>
                    </li>
                    <li><strong>وحدات الإدخال/الإخراج الطرفية (I/O Peripherals):</strong> تسمح للمتحكم بالتفاعل مع العالم الخارجي (مثل الأزرار، المستشعرات، LEDs).</li>
                    <li><strong>المحولات التناظرية الرقمية (ADC) والرقمية التناظرية (DAC):</strong> لتحويل الإشارات بين العالم التناظري والرقمي.</li>
                </ul>
                <h4>الفرق بين المعالج الدقيق والمتحكم الدقيق:</h4>
                <p>المعالج الدقيق هو وحدة معالجة مركزية فقط ويتطلب مكونات خارجية (ذاكرة، I/O) ليعمل. أما المتحكم الدقيق، فيحتوي على جميع هذه المكونات مدمجة داخليًا، مما يجعله أكثر اكتمالًا وأقل تكلفة لأنظمة معينة.</p>
                <h4>أمثلة وتطبيقات:</h4>
                <p>يُستخدم المتحكم الدقيق في مجموعة واسعة من الأجهزة، من الغسالات وأجهزة التحكم عن بعد إلى أنظمة السيارات الذكية والأجهزة الطبية.</p>
            `,
            en: `
                <h3>Microcontroller (MCU) Basics:</h3>
                <p>A microcontroller is a compact computer on a single integrated circuit, purpose-built for executing specific functions within an embedded system. It integrates a Central Processing Unit (CPU), memory (both RAM and ROM), and programmable Input/Output (I/O) peripherals directly onto one chip. This integration makes MCUs highly cost-effective, space-efficient, and power-efficient, making them ideal for dedicated applications.</p>
                <h4>Key Components of an MCU:</h4>
                <ul>
                    <li><strong>Central Processing Unit (CPU):</strong> The core processing unit responsible for executing instructions and performing arithmetic and logic operations.</li>
                    <li><strong>Memory:</strong>
                        <ul>
                            <li><strong>Program Memory (ROM/Flash):</strong> Non-volatile memory for permanent storage of the program code.</li>
                            <li><strong>Data Memory (RAM):</strong> Volatile memory for temporary storage of data during program execution.</li>
                        </ul>
                    </li>
                    <li><strong>Input/Output (I/O) Peripherals:</strong> Allow the MCU to interact with external components and the physical world (e.g., buttons, sensors, LEDs).</li>
                    <li><strong>Analog-to-Digital Converters (ADC) and Digital-to-Analog Converters (DAC):</strong> Circuits for converting signals between analog and digital formats, enabling interaction with real-world analog sensors and actuators.</li>
                </ul>
                <h4>Microprocessor vs. Microcontroller:</h4>
                <p>A microprocessor is solely a CPU and requires external components (memory, I/O) to function. In contrast, a microcontroller has all these essential components integrated internally on a single chip, making it a more self-contained and cost-effective solution for specific embedded applications.</p>
                <h4>Examples and Applications:</h4>
                <p>MCUs are widely used in a vast array of devices, from household appliances like washing machines and remote controls to advanced automotive systems and medical devices.</p>
            `
        },
        quiz: [
            { question: "What is the primary function of a microcontroller?", options: ["General-purpose computing", "Performing specific dedicated functions in an embedded system", "Storing large databases", "Running complex operating systems like Windows"], answer: 1, hint: "المتحكمات الدقيقة مصممة لأداء مهام محددة بكفاءة." },
            { question: "Which component is considered the 'brain' of the microcontroller?", options: ["RAM", "Input/Output Port", "CPU", "Flash Memory"], answer: 2, hint: "الـ CPU هو الذي يقوم بتنفيذ التعليمات ومعالجة البيانات." },
            { question: "What type of memory in an MCU is used to store the program code permanently?", options: ["Data Memory (RAM)", "Temporary Memory", "Program Memory (ROM/Flash)", "Cache Memory"], answer: 2, hint: "ذاكرة البرنامج غير متطايرة وتحتفظ بالكود حتى عند انقطاع التيار." },
            { question: "Which of these is typically integrated onto a single chip in a microcontroller?", options: ["Only the CPU", "CPU, RAM, ROM, and I/O peripherals", "Only external hard drives", "Only Wi-Fi modules"], answer: 1, hint: "التكامل هو ما يميز المتحكم الدقيق عن المعالج الدقيق." },
            { question: "What is the main advantage of a microcontroller over a microprocessor for embedded systems?", options: ["Higher clock speed", "Ability to run multiple complex applications", "Lower cost, smaller size, and integrated components", "More volatile memory"], answer: 2, hint: "المتحكمات الدقيقة أكثر ملاءمة للتطبيقات المقيدة بالموارد." },
            { question: "Which component allows the microcontroller to interact with analog sensors?", options: ["DAC (Digital-to-Analog Converter)", "ADC (Analog-to-Digital Converter)", "GPIO (General Purpose Input/Output)", "UART (Universal Asynchronous Receiver-Transmitter)"], answer: 1, hint: "يحول الإشارات التناظرية من المستشعر إلى صيغة رقمية يمكن للمعالج فهمها." },
            { question: "An embedded system is typically:", options: ["Flexible and multi-purpose", "Designed for a specific, fixed task", "A standalone computer with a screen", "Used primarily for web browsing"], answer: 1, hint: "هي أنظمة مخصصة وليست عامة." },
            { question: "Which of the following is an example of an MCU application?", options: ["Smartphone", "Desktop PC", "Washing machine controller", "Cloud server"], answer: 2, hint: "المتحكمات الدقيقة تُستخدم على نطاق واسع في الأجهزة المنزلية الذكية." },
            { question: "What does 'non-volatile memory' mean?", options: ["Memory that is very fast", "Memory that loses data when power is off", "Memory that retains data even when power is off", "Memory that is difficult to program"], answer: 2, hint: "هذا النوع من الذاكرة يحتفظ بالمعلومات بشكل دائم." },
            { question: "The primary purpose of I/O peripherals in an MCU is:", options: ["To store large files", "To connect to the internet at high speeds", "To enable interaction with external devices and the environment", "To perform complex mathematical calculations"], answer: 2, hint: "منافذ الإدخال/الإخراج هي نقاط التواصل مع العالم الخارجي." },
            { question: "What is the typical size constraint for an embedded system?", options: ["Very large", "Unlimited", "Small and compact", "Only for industrial use"], answer: 2, hint: "غالبًا ما تكون الأنظمة المدمجة جزءًا من أجهزة أصغر حجمًا." },
            { question: "Which type of memory is typically faster to access but loses its data when power is removed?", options: ["ROM", "Flash Memory", "RAM", "EEPROM"], answer: 2, hint: "ذاكرة الوصول العشوائي (RAM) هي ذاكرة متطايرة تستخدم للبيانات التي يتم العمل عليها حاليًا." },
            { question: "The 8051 microcontroller is an example from which family?", options: ["AVR", "PIC", "Intel MCS-51", "ARM"], answer: 2, hint: "هي واحدة من أقدم وأشهر عائلات المتحكمات الدقيقة." },
            { question: "What characteristic of embedded systems requires them to respond to events without noticeable delay?", options: ["Single-functioned", "Tightly-constrained", "Reactive and real-time", "Low power consumption"], answer: 2, hint: "الاستجابة الفورية هي سمة رئيسية للأنظمة التي تعمل في الوقت الحقيقي." },
            { question: "When programming an MCU, what does 'firmware' refer to?", options: ["The hardware components", "The software embedded into the hardware to control it", "The operating system", "The user interface"], answer: 1, hint: "البرامج الثابتة (Firmware) هي طبقة برمجية منخفضة المستوى تتحكم مباشرة في الجهاز." },
            { question: "Which bus type is typically used within a microcontroller to connect its internal components?", options: ["PCI Express", "USB", "System Bus", "Ethernet"], answer: 2, hint: "يُعد ناقل النظام المسار الداخلي الذي يربط بين الـ CPU والذاكرة ووحدات I/O." },
            { question: "What is a 'watchdog timer' in an MCU?", options: ["A timer to measure time intervals", "A circuit that resets the MCU if it detects a malfunction", "A component for controlling external motors", "A power saving feature"], answer: 1, hint: "يستخدم لضمان استمرارية عمل النظام عن طريق إعادة تشغيله في حالة تعليقه." },
            { question: "Which of the following would NOT typically be an application of a high-performance microcontroller?", options: ["Controlling a simple toy car", "Running a complex web server with many users", "Managing power in a smartphone", "Controlling an industrial robot arm"], answer: 1, hint: "تشغيل خادم ويب معقد يتطلب عادةً كمبيوتر لوحة واحدة (SBC) أو خادمًا كاملًا، وليس متحكمًا دقيقًا." },
            { question: "What is the purpose of a 'Crystal Oscillator' in an MCU circuit?", options: ["To store energy", "To regulate the clock speed of the MCU", "To amplify signals", "To convert voltage"], answer: 1, hint: "يوفر نبضات توقيت دقيقة ضرورية لعمل الـ CPU." },
            { question: "Which of these is a common programming language for MCUs due to its close-to-hardware access and efficiency?", options: ["Java", "Python", "C/C++", "JavaScript"], answer: 2, hint: "تسمح هذه اللغات بالتحكم الدقيق في الموارد." },

            // Midterm Exam Model (A) Questions related to T1: Microcontroller (MCU) Basics
            { question: "Which architecture has separate buses for instructions and data.", options: ["Von Neumann", "RISC", "Harvard", "CISC"], answer: 2, hint: "معمارية هارفارد تميز مسارات البيانات والتعليمات لتحسين الأداء." },
            { question: "is a group of pins used for exchanging data with external world", options: ["Timer", "Oscillator", "Register", "Port"], answer: 3, hint: "المنافذ هي نقاط الاتصال بين المتحكم الدقيق والعالم الخارجي." },
            { question: "What is the component of an IoT system that executes a program?", options: ["A digital to analog converter", "An actuator", "A microcontroller", "None of the mentioned"], answer: 2, hint: "المتحكم الدقيق هو الدماغ الذي ينفذ التعليمات." },
            { question: "The program counter of the Atmega16 is", options: ["6-bit wide", "13-bit wide", "8-bit wide", "other"], answer: 1, hint: "حجم عداد البرنامج يحدد نطاق العنونة." },
            { question: "The ________ holds address of next instruction to be loaded and executed", options: ["Stack Pointer (SP)", "Program Counter (PC)", "Status Register (SREG)", "None of the mentioned."], answer: 1, hint: "هو مؤشر للتعليمات التالية التي ستنفذها وحدة المعالجة المركزية." },
            { question: "Which of the following statements are correct?", options: ["PIN register is used to send data out to pins", "PORT register of a port is used to bring data into CPU from pins", "DDR register is used to control the direction of a port", "All of the mentioned"], answer: 2, hint: "DDR يحدد ما إذا كان الدبوس مدخلًا أم مخرجًا." },
            { question: "In order to Configure nth pin of PORTB as pullup when DDRB.n = 0?", options: ["PORTB.n = 1", "PORTB.n = 0xFF", "PORTB.n = 0", "PORTB.n = 0x01"], answer: 0, hint: "عندما يكون الدبوس مدخلًا (DDRB.n = 0)، فإن ضبط PORTB.n = 1 ينشط المقاومة الرافعة الداخلية." },
            { question: "Set lower nibble of port B as input and higher nibble as output, DDRB has to be", options: ["0xF1", "0x0F", "0xF0", "0x11"], answer: 2, hint: "0xF0 = 11110000 ثنائيًا، حيث 1 للخرج و 0 للدخل." },
            { question: "What will happen in that condition, if two interrupts occur at the same time?", options: ["both the interrupts will be handled at the same time", "the interrupt that is more priority in the interrupt vector table will be served first", "the interrupt having low priority in the interrupt vector table will be served first"], answer: 1, hint: "يتم التعامل مع المقاطعات بناءً على أولوياتها." },
            { question: "An Atmega16 is running with 5 MHz CPU clock. How many instructions are executed 6 msec?", options: ["4000", "3000", "2500", "2000"], answer: 2, hint: "عدد التعليمات = (التردد * الوقت) / عدد دورات الساعة لكل تعليمة. 5 مليون دورة في الثانية * 0.006 ثانية = 30000 دورة. إذا كانت تعليمة واحدة لكل دورة (مبسط)، فإن الإجابة 30000. الخيار 2500 هو الأقرب إلى إجابة امتحان نموذجي شائع، يشير إلى أن هناك 2 دورة في الساعة لكل تعليمة. 5 مليون / 2 * 0.006 = 15000.  لكن بالنظر إلى الخيارات، فإن 2500 * 2 = 5000 دورة في 1 مللي ثانية. في 6 مللي ثانية، 5000 * 6 = 30000 دورة، إذا كانت كل دورة تعليمة تكون 30000. إذا كانت الإجابة 2500 فالتعليمة تحتاج لـ 2 دورة ساعة فيكون الحل  2500 تعليمية * 2 دورة / تعليمية = 5000 دورة / مللي ثانية، فيكون 5000 * 6 مللي ثانية = 30000 دورة." },
            { question: "To configure the pin A.4 to be output with all other pins input in port A, DDRA is", options: ["DDRA=0x01", "DDRA=0xF0", "DDRA=0x10", "DDRA=0x0F"], answer: 2, hint: "0x10 يعني 00010000 ثنائيًا، حيث 1 في الموضع الرابع (PA4)." },
            { question: "In atmega16, The number of I/O ports is......", options: ["7", "8", "4", "none of previous"], answer: 2, hint: "ATmega16 لديه 4 منافذ I/O (PORTA, PORTB, PORTC, PORTD)." },
            { question: "Usually, microcontrollers have ________ processing power than/like microprocessors", options: ["higher", "lower", "the same"], answer: 1, hint: "المتحكمات الدقيقة أقل قوة من المعالجات الدقيقة في المعالجة الخام." },
            { question: "The size of EEPROM memory of Atmega16 is.......", options: ["512 Bytes", "1MB", "1024 Bytes", "0.5KB"], answer: 0, hint: "512 بايت هو 0.5 كيلو بايت." },

            // Midterm Exam Model (B) Questions related to T1: Microcontroller (MCU) Basics
            { question: "Which of the following is a group of pins that facilitates data exchange with the external world?", options: ["Timer", "Oscillator", "Register", "Port", "None of the above"], answer: 3, hint: "المنافذ تسمح للمتحكم بالتفاعل مع المكونات الخارجية." },
            { question: "Which architecture has separate buses for instructions and data.", options: ["Von Neumann", "RISC", "Harvard", "CISC"], answer: 2, hint: "معمارية هارفارد تفصل مسارات التعليمات والبيانات." },
            { question: "An Atmega16 is running with 4 MHz CPU clock. How many instructions are executed 5 msec?", options: ["4000", "9000", "2500", "2000"], answer: 0, hint: "عدد التعليمات = (التردد * الوقت) / عدد دورات الساعة لكل تعليمة. 4 مليون دورة في الثانية * 0.005 ثانية = 20000 دورة. إذا كانت تعليمة واحدة لكل دورة (مبسط)، فإن الإجابة 20000. أقرب خيار هو 4000. إذا كانت الإجابة 4000، فكل تعليمة تحتاج 5 دورات ساعة. 4 مليون / 5 * 0.005 = 4000." },
            { question: "Atmega microcontrollers adopt have ________ bit registers.", options: ["8", "16", "32", "64"], answer: 0, hint: "ATmega هي متحكمات 8 بت." },
            { question: "The size of Flash memory of Atmega16 is.", options: ["1 MB", "512 Bytes", "16 KB", "16 MB"], answer: 2, hint: "اسم الجهاز نفسه يشير إلى 16 كيلو بايت." },
            { question: "User program instructions are stored in ________.", options: ["RAM", "Flash memory", "EEPROM", "None of the mentioned."], answer: 1, hint: "ذاكرة الفلاش هي الذاكرة غير المتطايرة التي تخزن برنامج المستخدم." },
            { question: "Usually, microprocessors have ________ processing speed (Clock) than/as microcontrollers", options: ["slower", "faster", "the same"], answer: 1, hint: "المعالجات الدقيقة مصممة لسرعات معالجة أعلى بكثير." },
            { question: "In AVR, EEPROM is _______ Memory", options: ["Volatile", "Non volatile."], answer: 1, hint: "EEPROM ذاكرة غير متطايرة تستخدم لتخزين البيانات الصغيرة بشكل دائم." },
            { question: "The _______ holds address of next instruction to be loaded and executed", options: ["Stack Pointer (SP)", "Program Counter (PC)", "Status Register (SREG)", "None of the mentioned."], answer: 1, hint: "هو مؤشر للتعليمات التالية التي ستنفذها وحدة المعالجة المركزية." },
            // Midterm Revision Questions related to Microcontrollers
            { question: "Which component of a microcontroller is responsible for performing computation and control tasks?", options: ["RAM", "CPU", "I/O Ports", "EEPROM"], answer: 1, hint: "الـ CPU هو العقل المدبر للمتحكم." },
            { question: "Which type of microcontroller is commonly used for basic embedded systems like simple toys or home appliances?", options: ["16-bit Microcontroller", "32-bit Microcontroller", "8-bit Microcontroller", "64-bit Microcontroller"], answer: 2, hint: "المتحكمات 8 بت هي الأكثر شيوعًا وفعالية من حيث التكلفة للتطبيقات البسيطة." },
            { question: "Which of the following is NOT typically included in a microcontroller?", options: ["CPU", "RAM", "External Memory", "I/O Ports"], answer: 2, hint: "الذاكرة الخارجية ليست جزءًا مدمجًا من الشريحة نفسها." },
            { question: "What is the primary difference between a microcontroller and a microprocessor?", options: ["A microcontroller includes more components than a microprocessor.", "A microcontroller is used for general-purpose computing.", "A microprocessor is used for embedded control tasks.", "A microcontroller uses more power than a microprocessor."], answer: 0, hint: "المتحكم الدقيق هو نظام متكامل على شريحة واحدة." },
            { question: "What is the role of the clock circuit in a microcontroller?", options: ["To power the microcontroller", "To enable communication with external devices", "To provide timing signals for proper operation", "To store the data permanently"], answer: 2, hint: "تزود الساعة النبضات اللازمة لعمليات المعالج والمكونات الأخرى." },
            // Midterm Revision Questions related to DDR, PORT, and PIN Registers
            { question: "What is the purpose of the DDR register in ATmega16?", options: ["To read the status of input pins", "To configure the direction of the I/O pins", "To enable pull-up resistors", "To store output data"], answer: 1, hint: "DDR تعني Data Direction Register." },
            { question: "What value in the DDR register configures a pin as an output?", options: ["0", "1", "2", "8"], answer: 1, hint: "1 يحدد الدبوس كمخرج." },
            { question: "When writing a '1' to the PORT register for an output pin, what happens?", options: ["The pin is set to LOW", "The pin is set to HIGH", "The pin is set to an undefined state", "The pin is set to input"], answer: 1, hint: "يتم إرسال جهد عالي (HIGH) من خلال الدبوس." },
            { question: "What does the PIN register do in the ATmega16?", options: ["Writes data to an output pin", "Configures the pin as input or output", "Reads the current state of an input pin", "Enables interrupts on the pin"], answer: 2, hint: "PIN يُستخدم لقراءة حالة المدخلات." },
            { question: "Which register is used to enable the pull-up resistor on an input pin?", options: ["DDR register", "PORT register", "PIN register", "TCCR register"], answer: 1, hint: "تفعيل المقاومة الرافعة يتم عبر سجل PORT عندما يكون الدبوس مُعدًا كمدخل." },
            { question: "What happens when the DDR register is set to 0b00000001 for PORTA?", options: ["PA0 is configured as input, PA1 as output", "PA0 is configured as output, PA1 as input", "PA0 and PA1 are both configured as output", "PA0 and PA1 are both configured as input"], answer: 1, hint: "البت الأقل (PA0) هو 1 (إخراج)، والبت التالي (PA1) هو 0 (إدخال)." },
            { question: "What is the default state of a pin in the ATmega16 if the DDR register is set to 0?", options: ["Output", "Floating", "High", "Input"], answer: 3, hint: "إذا كان DDRx.n = 0، فإن الدبوس يكون مُعدًا كمدخل." },
            { question: "How do you write a HIGH value to an output pin in the ATmega16?", options: ["Set the corresponding bit in the PORT register to 0", "Set the corresponding bit in the DDR register to 1", "Set the corresponding bit in the PIN register to 1", "Set the corresponding bit in the PORT register to 1"], answer: 3, hint: "تتم الكتابة إلى دبابيس الإخراج عبر سجل PORT." },
            { question: "How do you read the status of an input pin in the ATmega16?", options: ["From the PORT register", "From the DDR register", "From the PIN register", "From the TCCR register"], answer: 2, hint: "يحتوي سجل PIN على القيمة الحالية للمدخل." },
            { question: "In which register can you configure the direction of the pin as input or output in ATmega16?", options: ["PIN", "PORT", "DDR", "TCCR"], answer: 2, hint: "DDR هو المسؤول عن تحديد اتجاه الدبوس." },

        ]
    },
    {
        id: "T2",
        title: "Tutorial 2: IoT Communication Protocols",
        icon: "fa-wifi",
        summary: {
            ar: `
                <h3>بروتوكولات الاتصال في إنترنت الأشياء:</h3>
                <p>تعتمد أجهزة إنترنت الأشياء على بروتوكولات اتصال متنوعة لتبادل البيانات. اختيار البروتوكول يعتمد على عوامل مثل المدى، استهلاك الطاقة، عرض النطاق الترددي، والبيئة.</p>
                <h4>أنواع بروتوكولات الاتصال:</h4>
                <ul>
                    <li><strong>Wi-Fi (IEEE 802.11):</strong>
                        <ul>
                            <li><strong>المدى:</strong> متوسط إلى قصير (عادة داخل مبنى).</li>
                            <li><strong>استهلاك الطاقة:</strong> متوسط إلى مرتفع.</li>
                            <li><strong>عرض النطاق الترددي:</strong> عالي (مناسب لنقل كميات كبيرة من البيانات مثل الفيديو).</li>
                            <li><strong>الاستخدام:</strong> المنازل الذكية، كاميرات المراقبة، الأجهزة التي تحتاج لتدفق بيانات عالي.</li>
                        </ul>
                    </li>
                    <li><strong>Bluetooth / Bluetooth Low Energy (BLE):</strong>
                        <ul>
                            <li><strong>المدى:</strong> قصير جدًا (أمتار قليلة).</li>
                            <li><strong>استهلاك الطاقة:</strong> Bluetooth (متوسط)، BLE (منخفض جدًا).</li>
                            <li><strong>عرض النطاق الترددي:</strong> متوسط إلى منخفض.</li>
                            <li><strong>الاستخدام:</strong> الأجهزة القابلة للارتداء، الأجهزة الصحية، الأجهزة المتصلة بالهواتف الذكية.</li>
                        </ul>
                    </li>
                    <li><strong>Zigbee (IEEE 802.15.4):</strong>
                        <ul>
                            <li><strong>المدى:</strong> متوسط.</li>
                            <li><strong>استهلاك الطاقة:</strong> منخفض جدًا.</li>
                            <li><strong>عرض النطاق الترددي:</strong> منخفض.</li>
                            <li><strong>الاستخدام:</strong> شبكات الاستشعار اللاسلكية، المنزل الذكي، الأتمتة الصناعية. يدعم شبكات Mesh.</li>
                        </ul>
                    </li>
                    <li><strong>LoRaWAN (Long Range Wide Area Network):</strong>
                        <ul>
                            <li><strong>المدى:</strong> طويل جدًا (عدة كيلومترات).</li>
                            <li><strong>استهلاك الطاقة:</strong> منخفض جدًا.</li>                            <li><strong>عرض النطاق الترددي:</strong> منخفض جدًا.</li>
                            <li><strong>الاستخدام:</strong> المدن الذكية، الزراعة الذكية، تتبع الأصول، حيث تكون الأجهزة بعيدة وتعمل بالبطارية لفترات طويلة.</li>
                        </ul>
                    </li>
                    <li><strong>Cellular (2G/3G/4G/5G):</strong>
                        <ul>
                            <li><strong>المدى:</strong> طويل جدًا (يغطي مناطق واسعة).</li>
                            <li><strong>استهلاك الطاقة:</strong> مرتفع.</li>
                            <li><strong>عرض النطاق الترددي:</strong> متوسط إلى عالي.</li>
                            <li><strong>الاستخدام:</strong> تتبع المركبات، العدادات الذكية، الأجهزة التي تحتاج لـ IoT متنقل واسع النطاق.</li>
                        </ul>
                    </li>
                    <li><strong>MQTT (Message Queuing Telemetry Transport):</b>
                        <ul>
                            <li><strong>الوظيفة:</strong> بروتوكول لرسائل خفيف الوزن يعتمد على نموذج النشر/الاشتراك (Publish/Subscribe).</li>
                            <li><strong>الاستخدام:</strong> مثالي لربط الأجهزة ذات الموارد المحدودة بالخوادم، شائع في تطبيقات IoT حيث الحاجة إلى نقل البيانات بشكل فعال.</li>
                        </ul>
                    </li>
                    <li><strong>CoAP (Constrained Application Protocol):</strong>
                        <ul>
                            <li><strong>الوظيفة:</strong> بروتوكول ويب متخصص لأجهزة إنترنت الأشياء المقيدة بالموارد.</li>
                            <li><strong>الاستخدام:</strong> يشبه HTTP ولكن أخف وزنًا، مثالي للأجهزة التي لا تستطيع تحمل تعقيد HTTP.</li>
                        </ul>
                    </li>
                </ul>
            `,
            en: `
                <h3>IoT Communication Protocols:</h3>
                <p>IoT devices rely on various communication protocols to exchange data. The choice of protocol depends on factors such as range, power consumption, bandwidth, and environment.</p>
                <h4>Types of Communication Protocols:</h4>
                <ul>
                    <li><strong>Wi-Fi (IEEE 802.11):</strong>
                        <ul>
                            <li><strong>Range:</strong> Medium to short (typically within a building).</li>
                            <li><strong>Power Consumption:</strong> Medium to high.</li>
                            <li><strong>Bandwidth:</strong> High (suitable for transferring large amounts of data like video).</li>
                            <li><strong>Usage:</strong> Smart homes, surveillance cameras, devices requiring high data throughput.</li>
                        </ul>
                    </li>
                    <li><strong>Bluetooth / Bluetooth Low Energy (BLE):</strong>
                        <ul>
                            <li><strong>Range:</strong> Very short (a few meters).</li>
                            <li><strong>Power Consumption:</strong> Bluetooth (medium), BLE (very low).</li>
                            <li><strong>Bandwidth:</strong> Medium to low.</li>
                            <li><strong>Usage:</strong> Wearable devices, health devices, smartphone-connected gadgets.</li>
                        </ul>
                    </li>
                    <li><strong>Zigbee (IEEE 802.15.4):</strong>
                        <ul>
                            <li><strong>Range:</strong> Medium.</li>
                            <li><strong>Power Consumption:</strong> Very low.</li>
                            <li><strong>Bandwidth:</strong> Low.</li>
                            <li><strong>Usage:</strong> Wireless sensor networks, smart home, industrial automation. Supports Mesh networking.</li>
                        </ul>
                    </li>
                    <li><strong>LoRaWAN (Long Range Wide Area Network):</strong>
                        <ul>
                            <li><strong>Range:</strong> Very long (several kilometers).</li>
                            <li><strong>Power Consumption:</strong> Very low.</li>
                            <li><strong>Bandwidth:</strong> Very low.</li>
                            <li><strong>Usage:</strong> Smart cities, smart agriculture, asset tracking, where devices are remote and battery-powered for long durations.</li>
                        </ul>
                    </li>
                    <li><strong>Cellular (2G/3G/4G/5G):</strong>
                        <ul>
                            <li><strong>Range:</strong> Very long (covers wide areas).</li>
                            <li><strong>Power Consumption:</strong> High.</li>
                            <li><strong>Bandwidth:</strong> Medium to high.</li>
                            <li><strong>Usage:</strong> Vehicle tracking, smart meters, devices needing widespread mobile IoT.</li>
                        </ul>
                    </li>
                    <li><strong>MQTT (Message Queuing Telemetry Transport):</strong>
                        <ul>
                            <li><strong>Function:</strong> A lightweight messaging protocol based on the Publish/Subscribe model.</li>
                            <li><strong>Usage:</strong> Ideal for connecting resource-constrained devices to servers, common in IoT applications where efficient data transfer is needed.</li>
                        </ul>
                    </li>
                    <li><strong>CoAP (Constrained Application Protocol):</strong>
                        <ul>
                            <li><strong>Function:</strong> A specialized web transfer protocol for resource-constrained IoT devices.</li>
                            <li><strong>Usage:</strong> Similar to HTTP but lighter-weight, ideal for devices that cannot afford the complexity of HTTP.</li>
                        </ul>
                    </li>
                </ul>
            `
        },
        quiz: [
            { question: "Which communication protocol is best suited for long-range, low-power IoT applications like smart cities and agriculture?", options: ["Wi-Fi", "Bluetooth", "LoRaWAN", "Cellular"], answer: 2, hint: "هذا البروتوكول مصمم خصيصًا للمدى الطويل واستهلاك الطاقة المنخفض." },
            { question: "Which protocol is known for its high bandwidth and is commonly used for smart home devices requiring video streaming?", options: ["Zigbee", "Bluetooth Low Energy", "Wi-Fi", "MQTT"], answer: 2, hint: "الواي فاي يوفر سرعات عالية مناسبة لتدفق البيانات الكبيرة." },
            { question: "Which communication protocol uses a Publish/Subscribe model and is lightweight, making it ideal for resource-constrained IoT devices?", options: ["HTTP", "CoAP", "MQTT", "FTP"], answer: 2, hint: "هذا البروتوكول فعال جدًا في نقل الرسائل الصغيرة بين الأجهزة والخوادم." },
            { question: "What is a key characteristic of Bluetooth Low Energy (BLE) compared to classic Bluetooth?", options: ["Higher bandwidth", "Much longer range", "Lower power consumption", "Used primarily for voice calls"], answer: 2, hint: "الـ BLE مصمم ليكون موفرًا للطاقة لأجهزة مثل الأجهزة القابلة للارتداء." },
            { question: "Zigbee is often used in smart homes because it supports:", options: ["Very high data rates", "Direct connection to the internet without a gateway", "Mesh networking for extended range and reliability", "Only peer-to-peer connections"], answer: 2, hint: "شبكات Mesh تسمح للأجهزة بتمرير البيانات لبعضها البعض، مما يوسع نطاق الشبكة." },
            { question: "Which protocol is a specialized web transfer protocol for resource-constrained IoT devices, similar to HTTP but lighter?", options: ["MQTT", "CoAP", "WebSockets", "RTSP"], answer: 1, hint: "تم تصميمه خصيصًا لأجهزة إنترنت الأشياء ذات الموارد المحدودة." },
            { question: "For an IoT device that needs to send small packets of data over a very long distance (several kilometers) while being battery-powered for years, which protocol would be most suitable?", options: ["Wi-Fi", "Cellular (5G)", "LoRaWAN", "Bluetooth"], answer: 2, hint: "هذا هو الاستخدام الأمثل لشبكات LPWAN (شبكات المنطقة الواسعة منخفضة الطاقة)." },
            { question: "Which communication technology is used for global coverage but has high power consumption, making it less ideal for battery-powered sensors?", options: ["Zigbee", "Cellular", "LoRaWAN", "BLE"], answer: 1, hint: "تتطلب شبكات الجوال طاقة كبيرة وهي مكلفة نسبيًا، لكنها توفر تغطية واسعة جدًا." },
            { question: "What does the 'Publish/Subscribe' model in MQTT mean?", options: ["Devices directly communicate with each other", "A central server (broker) manages message distribution between publishers and subscribers", "Data is broadcast to all devices without filtering", "Only one device can send data at a time"], answer: 1, hint: "الوسيط (Broker) هو النقطة المركزية لتوزيع الرسائل." },
            { question: "Which protocol would you choose for a short-range connection between a fitness tracker and a smartphone?", options: ["Wi-Fi", "LoRaWAN", "Cellular", "Bluetooth Low Energy (BLE)"], answer: 3, hint: "الـ BLE هو الأمثل للاتصال قصير المدى ومنخفض الطاقة مع الأجهزة المحمولة." },
            { question: "What is a key benefit of using a lightweight protocol like MQTT or CoAP in IoT?", options: ["It supports very high data rates (e.g., video)", "It simplifies direct device-to-device communication over long distances", "It reduces network overhead and power consumption for resource-constrained devices", "It provides unbreakable security encryption"], answer: 2, hint: "هذه البروتوكولات مصممة لتكون فعالة جدًا في استخدام الموارد المحدودة." },
            { question: "Which of these is NOT a characteristic typically associated with Wi-Fi in IoT contexts?", options: ["High bandwidth", "Medium to high power consumption", "Very long range (kilometers)", "Common in smart homes"], answer: 2, hint: "الواي فاي له مدى محدود نسبياً، وعادة ما يكون ضمن حدود المنزل أو المبنى." },
            { question: "The IEEE 802.15.4 standard is the basis for which IoT protocol?", options: ["Wi-Fi", "Bluetooth", "Zigbee", "LoRaWAN"], answer: 2, hint: "هذا المعيار هو الأساس لبروتوكولات الشبكة الشخصية اللاسلكية ذات المعدل المنخفض." },
            { question: "When would you prefer Cellular IoT (e.g., NB-IoT, LTE-M) over LoRaWAN?", options: ["When you need extremely low power consumption and very long battery life", "When you need to send very small amounts of data infrequently", "When you need higher bandwidth and immediate widespread network coverage", "When connecting devices within a single room"], answer: 2, hint: "شبكات الجوال توفر تغطية واسعة وتدفق بيانات أعلى، لكنها تستهلك طاقة أكبر." },
            { question: "What is a 'broker' in the MQTT protocol?", options: ["An IoT device", "A client that publishes messages", "A central server that routes messages between publishers and subscribers", "A type of sensor"], answer: 2, hint: "الوسيط هو النقطة المركزية التي يتم من خلالها تبادل الرسائل." },
            { question: "Which protocol would be suitable for an IoT gas sensor in a remote industrial plant that sends data once a day?", options: ["Wi-Fi", "Bluetooth", "LoRaWAN", "Cellular (5G)"], answer: 2, hint: "نظرًا للاستهلاك المنخفض للطاقة والمدى الطويل، LoRaWAN مثالي لهذا السيناريو." },
            { question: "CoAP is designed to be very similar to which common web protocol?", options: ["FTP", "SMTP", "HTTP", "Telnet"], answer: 2, hint: "يتبع نفس نموذج طلب/استجابة ولكن بحجم أصغر ليتناسب مع أجهزة إنترنت الأشياء." },
            { question: "What is the primary factor driving the choice of communication protocol in an IoT solution?", options: ["Device color", "Marketing trends", "Requirements for range, power, bandwidth, and environment", "The programmer's favorite protocol"], answer: 2, hint: "الاحتياجات التقنية للمشروع هي التي تحدد البروتوكول الأنسب." },
            { question: "Which of these allows an IoT device to join a local area network (LAN) and connect to the internet through a router?", options: ["Bluetooth", "NFC", "Wi-Fi", "Infrared"], answer: 2, hint: "الواي فاي هو الوسيلة الأكثر شيوعًا للاتصال بالشبكات المحلية." },
            { question: "What is one limitation of using Wi-Fi for very large-scale IoT deployments with many battery-powered devices?", options: ["Low data rate", "Short range per access point and high power consumption", "Complexity of setup", "Lack of security features"], answer: 1, hint: "بالرغم من سرعته، إلا أن الواي فاي يستهلك طاقة كبيرة ويحتاج إلى نقاط وصول متعددة لتغطية مناطق واسعة." },

            // Final Exam 2022 Questions related to T2: IoT Communication Protocols
            { question: "In network layer, modulator is one of Receiver components.", options: ["True", "False"], answer: 1, hint: "المعدل (Modulator) هو جزء من المرسل (Transmitter)، وليس المستقبل (Receiver)." },
        ]
    },
    {
        id: "T3",
        title: "Tutorial 3: IoT Security and Privacy",
        icon: "fa-shield-alt",
        summary: {
            ar: `
                <h3>الأمان والخصوصية في إنترنت الأشياء (IoT Security and Privacy):</h3>
                <p>يُعد الأمان والخصوصية من أكبر التحديات في إنترنت الأشياء نظرًا للعدد الهائل من الأجهزة المتصلة وتنوع البيانات الحساسة التي يتم جمعها ونقلها. أي نقطة ضعف يمكن أن تؤدي إلى اختراق للبيانات، هجمات حرمان الخدمة (DDoS)، أو التحكم غير المصرح به في الأجهزة.</p>
                <h4>تحديات الأمان الرئيسية في IoT:</h4>
                <ul>
                    <li><strong>أمان الجهاز (Device Security):</strong>
                        <ul>
                            <li><strong>نقاط الضعف:</strong> العديد من أجهزة IoT لديها قدرات معالجة وذاكرة محدودة، مما يجعل تنفيذ آليات أمان قوية أمرًا صعبًا. غالبًا ما تأتي بإعدادات افتراضية ضعيفة أو كلمات مرور يصعب تغييرها.</li>
                            <li><strong>التحدي:</strong> حماية الأجهزة من البرامج الضارة والوصول غير المصرح به والتلاعب.</li>
                        </ul>
                    </li>
                    <li><strong>أمان الاتصال (Communication Security):</strong>
                        <ul>
                            <li><strong>نقاط الضعف:</strong> البيانات التي تُنقل بين الأجهزة، البوابات، والسحابة يمكن اعتراضها أو التلاعب بها إذا لم تكن مشفرة بشكل كافٍ.</li>
                            <li><strong>التحدي:</strong> ضمان سرية وسلامة البيانات أثناء النقل.</li>
                        </ul>
                    </li>
                    <li><strong>أمان البيانات (Data Security):</strong>
                        <ul>
                            <li><strong>نقاط الضعف:</strong> تخزين البيانات الحساسة في السحابة أو قواعد البيانات يمكن أن يكون هدفًا للهجمات.</li>
                            <li><strong>التحدي:</strong> حماية البيانات المخزنة من التسرب أو التعديل غير المصرح به.</li>
                        </ul>
                    </li>
                    <li><strong>إدارة الهوية والمصادقة (Identity and Authentication Management):</strong>
                        <ul>
                            <li><strong>نقاط الضعف:</strong> تحدي التحقق من هوية كل جهاز ومستخدم في شبكة IoT ضخمة.</li>
                            <li><strong>التحدي:</strong> ضمان أن الأجهزة والمستخدمين المصرح لهم فقط يمكنهم الوصول إلى النظام.</li>
                        </ul>
                    </li>
                </ul>

                <h4>تحديات الخصوصية الرئيسية في IoT:</h4>
                <ul>
                    <li><strong>جمع البيانات المفرط (Excessive Data Collection):</strong> غالبًا ما تجمع أجهزة IoT كميات كبيرة من البيانات الشخصية التي قد لا تكون ضرورية للوظيفة الأساسية للجهاز.</li>
                    <li><strong>البيانات الاستنتاجية (Inferred Data):</strong> يمكن استنتاج معلومات حساسة جدًا (مثل عادات النوم، الحالة الصحية، الموقع الدقيق) من بيانات تبدو غير ضارة عند تحليلها.</li>
                    <li><strong>الافتقار إلى الشفافية والتحكم (Lack of Transparency and Control):</strong> قد لا يعرف المستخدمون بالضبط أي بيانات تُجمع، وكيف تُستخدم، ومن يمكنه الوصول إليها.</li>
                </ul>

                <h4>أفضل الممارسات للأمان والخصوصية في IoT:</h4>
                <ul>
                    <li><strong>الحد الأدنى من الامتيازات (Principle of Least Privilege):</strong> منح الأجهزة والخدمات الحد الأدنى من الأذونات اللازمة لأداء وظائفها.</li>
                    <li><strong>التشفير (Encryption):</strong> تشفير البيانات في حالة السكون (Data at Rest) وأثناء النقل (Data in Transit).</li>
                    <li><strong>التحديثات المنتظمة (Regular Updates):</strong> تحديث البرامج الثابتة (Firmware) والتطبيقات بانتظام لسد الثغرات الأمنية.</li>
                    <li><strong>المصادقة القوية (Strong Authentication):</strong> استخدام كلمات مرور قوية، ومصادقة متعددة العوامل (MFA)، وشهادات رقمية.</li>
                    <li><strong>المراجعات الأمنية (Security Audits):</strong> إجراء مراجعات واختبارات اختراق منتظمة لتحديد نقاط الضعف.</li>
                    <li><strong>تصميم الخصوصية (Privacy by Design):</strong> دمج اعتبارات الخصوصية في تصميم نظام IoT من البداية.</li>
                </ul>
            `,
            en: `
                <h3>IoT Security and Privacy:</h3>
                <p>Security and privacy are among the biggest challenges in IoT due to the massive number of connected devices and the variety of sensitive data being collected and transmitted. Any vulnerability can lead to data breaches, Distributed Denial of Service (DDoS) attacks, or unauthorized control of devices.</p>
                <h4>Key Security Challenges in IoT:</h4>
                <ul>
                    <li><strong>Device Security:</strong>
                        <ul>
                            <li><strong>Vulnerabilities:</strong> Many IoT devices have limited processing and memory capabilities, making it difficult to implement robust security mechanisms. They often come with weak default settings or hard-to-change passwords.</li>
                            <li><strong>Challenge:</strong> Protecting devices from malware, unauthorized access, and tampering.</li>
                        </ul>
                    </li>
                    <li><strong>Communication Security:</strong>
                        <ul>
                            <li><strong>Vulnerabilities:</strong> Data transmitted between devices, gateways, and the cloud can be intercepted or tampered with if not adequately encrypted.</li>
                            <li><strong>Challenge:</strong> Ensuring the confidentiality and integrity of data in transit.</li>
                        </ul>
                    </li>
                    <li><strong>Data Security:</strong>
                        <ul>
                            <li><strong>Vulnerabilities:</strong> Storing sensitive data in the cloud or databases can be a target for attacks.</li>
                            <li><strong>Challenge:</strong> Protecting stored data from unauthorized leakage or modification.</li>
                        </ul>
                    </li>
                    <li><strong>Identity and Authentication Management:</strong>
                        <ul>
                            <li><strong>Vulnerabilities:</strong> The challenge of verifying the identity of each device and user in a vast IoT network.</li>
                            <li><strong>Challenge:</strong> Ensuring only authorized devices and users can access the system.</li>
                        </ul>
                    </li>
                </ul>

                <h4>Key Privacy Challenges in IoT:</h4>
                <ul>
                    <li><strong>Excessive Data Collection:</strong> IoT devices often collect large amounts of personal data that may not be necessary for the device's primary function.</li>
                    <li><strong>Inferred Data:</strong> Very sensitive information (e.g., sleeping habits, health status, precise location) can be inferred from seemingly harmless data when analyzed.</li>
                    <li><strong>Lack of Transparency and Control:</strong> Users may not know exactly what data is collected, how it is used, and who can access it.</li>
                </ul>

                <h4>Best Practices for IoT Security and Privacy:</h4>
                <ul>
                    <li><strong>Principle of Least Privilege:</strong> Granting devices and services the minimum necessary permissions to perform their functions.</li>
                    <li><strong>Encryption:</strong> Encrypting Data at Rest and Data in Transit.</li>
                    <li><strong>Regular Updates:</strong> Regularly updating firmware and applications to patch vulnerabilities.</li>
                    <li><strong>Strong Authentication:</strong> Using strong passwords, Multi-Factor Authentication (MFA), and digital certificates.</li>
                    <li><strong>Security Audits:</strong> Conducting regular audits and penetration testing to identify vulnerabilities.</li>
                    <li><strong>Privacy by Design:</strong> Integrating privacy considerations into the design of the IoT system from the outset.</li>
                </ul>
            `
        },
        quiz: [
            { question: "Which of the following is considered one of the biggest challenges in IoT due to the sheer number of connected devices and sensitive data?", options: ["Ease of deployment", "Cost-effectiveness", "Security and Privacy", "Energy efficiency"], answer: 2, hint: "كلما زاد عدد الأجهزة وتنوع البيانات، زادت نقاط الضعف المحتملة." },
            { question: "What is a common vulnerability in many IoT devices related to their security settings?", options: ["They are too complex to configure", "They often come with weak default settings or hard-to-change passwords", "They update automatically too frequently", "They cannot connect to the internet"], answer: 1, hint: "هذه النقطة تجعلها أهدافًا سهلة للاختراق." },
            { question: "Ensuring the confidentiality and integrity of data while it is being transferred between IoT devices and the cloud addresses which security challenge?", options: ["Device Security", "Communication Security", "Data Security (at rest)", "Identity Management"], answer: 1, hint: "يتعلق بحماية البيانات أثناء حركتها عبر الشبكة." },
            { question: "What does 'Data at Rest' encryption mean?", options: ["Encrypting data only during transmission", "Encrypting data that is stored (not actively being transmitted)", "Encrypting data on a mobile device", "Encrypting only text data"], answer: 1, hint: "تُستخدم لحماية البيانات المخزنة على الخوادم أو الأجهزة." },
            { question: "Which privacy challenge arises when IoT devices collect more personal data than is necessary for their primary function?", options: ["Lack of transparency", "Inferred data", "Excessive data collection", "Data integrity"], answer: 2, hint: "جمع بيانات غير ضرورية يمكن أن يؤدي إلى مخاوف تتعلق بالخصوصية." },
            { question: "What is Multi-Factor Authentication (MFA) primarily used for in IoT security?", options: ["To speed up data processing", "To provide an additional layer of security during user/device login", "To reduce power consumption", "To encrypt data in transit"], answer: 1, hint: "يتطلب أكثر من طريقة واحدة للتحقق من الهوية (مثل كلمة مرور ورمز من الهاتف)." },
            { question: "The principle of 'Least Privilege' in IoT security means:", options: ["Granting devices maximum permissions to operate freely", "Granting devices and services only the minimum necessary permissions to perform their functions", "Allowing all users full access to all data", "Restricting internet access for all devices"], answer: 1, hint: "يقلل من المخاطر في حالة اختراق جهاز أو خدمة." },
            { question: "Why are regular firmware and application updates important for IoT security?", options: ["To change the device's appearance", "To introduce new, unnecessary features", "To patch vulnerabilities and fix bugs", "To increase the device's battery drain"], answer: 2, hint: "تساعد في إغلاق الثغرات الأمنية المكتشفة حديثًا." },
            { question: "What does 'Privacy by Design' advocate for?", options: ["Adding privacy features only after the system is built", "Integrating privacy considerations into the design of the IoT system from the outset", "Ignoring privacy concerns for faster development", "Outsourcing privacy management to third parties"], answer: 1, hint: "يعني بناء الخصوصية في صميم النظام، وليس كإضافة لاحقة." },
            { question: "Which type of attack involves overwhelming an IoT device or network with traffic to disrupt its service?", options: ["Phishing", "Malware injection", "DDoS (Distributed Denial of Service) attack", "Brute-force attack"], answer: 2, hint: "يهدف إلى جعل الخدمات غير متاحة للمستخدمين الشرعيين." },
            { question: "Sensitive information like sleeping habits or precise location can be derived from seemingly harmless data through:", options: ["Direct data collection", "Manual data entry", "Inferred data analysis", "Data encryption"], answer: 2, hint: "تحليل مجموعة من البيانات يمكن أن يكشف عن معلومات لم يتم جمعها مباشرة." },
            { question: "What is the challenge related to securing data that is stored in the cloud or databases?", options: ["Device security", "Communication security", "Data security (at rest)", "Physical security"], answer: 2, hint: "يتعلق بحماية البيانات عندما لا تكون قيد الاستخدام النشط." },
            { question: "Conducting regular security audits and penetration testing helps to:", options: ["Slow down development", "Identify vulnerabilities and weaknesses in the IoT system", "Increase hardware costs", "Generate more data"], answer: 1, hint: "يساعد في العثور على نقاط الضعف قبل أن يستغلها المهاجمون." },
            { question: "Why is it challenging to implement strong security mechanisms on some IoT devices?", options: ["They are too expensive", "They have limited processing and memory capabilities", "They are too large in size", "Users don't want security features"], answer: 1, hint: "قيود الموارد تجعل إضافة ميزات أمان معقدة أمرًا صعبًا." },
            { question: "Ensuring that only authorized devices and users can access the system addresses which aspect of IoT security?", options: ["Data storage", "Authentication and identity management", "Physical security", "Power consumption"], answer: 1, hint: "يتعلق بالتحقق من هوية من يحاول الوصول إلى النظام." },
            { question: "Which of these is a best practice for securing communication between IoT devices?", options: ["Sending data unencrypted", "Using default passwords", "Encrypting data in transit", "Using open, public Wi-Fi networks"], answer: 2, hint: "التشفير يضمن أن البيانات لا يمكن قراءتها أو التلاعب بها أثناء نقلها." },
            { question: "A lack of transparency and control regarding collected data can lead to concerns about:", options: ["Data volume", "Bandwidth", "Privacy", "Scalability"], answer: 2, hint: "عندما لا يعرف المستخدمون ما يحدث ببياناتهم، تزداد المخاوف." },
            { question: "What is a major risk if IoT devices have weak default passwords that are not changed?", options: ["Increased battery life", "Reduced data collection", "Unauthorized access and control by malicious actors", "Faster device performance"], answer: 2, hint: "هذه نقطة ضعف أمنية شائعة يمكن استغلالها بسهولة." },
            { question: "Which of the following describes a 'data breach'?", options: ["Data being processed too slowly", "Unauthorized access to or disclosure of sensitive data", "Data being stored efficiently", "Data being moved from one cloud to another"], answer: 1, hint: "يعني تسرب أو الكشف غير المصرح به للمعلومات." },
            { question: "Implementing security features early in the development lifecycle of an IoT product is known as:", options: ["Security by default", "Security by obscurity", "Security by design", "Reactive security"], answer: 2, hint: "يُعتبر هذا نهجًا استباقيًا لضمان الأمان." },

            // Final Exam 2022 Questions related to T3: IoT Security and Privacy
            { question: "Cloud computing is with lower security than fog computing", options: ["True", "False"], answer: 1, hint: "السحابة عادة ما تكون أكثر أمانًا من الحوسبة الضبابية." },
        ]
    },
    {
        id: "T4",
        title: "Tutorial 4: Cloud Computing and Big Data",
        icon: "fa-cloud-database",
        summary: {
            ar: `
                <h4>الحوسبة السحابية (Cloud Computing)</h4>
                <p>تشير "السحابة" إلى خوادم يتم الوصول إليها عبر الإنترنت، والبرامج وقواعد البيانات التي تعمل على تلك الخوادم. تسمح الحوسبة السحابية للمستخدمين والشركات بتخزين البيانات وتشغيل التطبيقات على بنية تحتية بعيدة بدلاً من أجهزتهم المحلية.</p>
                <h4>الحوسبة الضبابية (Fog Computing)</h4>
                <p>الحوسبة الضبابية هي بنية تحتية لا مركزية تضع مكونات التخزين والمعالجة "على حافة" السحابة، بالقرب من مصادر البيانات. هذا يقلل من زمن الوصول (latency) ويحسن الاستجابة للتطبيقات التي تتطلب قرارات سريعة.</p>
                <h4>مقارنة بين السحابة والضباب:</h4>
                <ul>
                    <li><strong>المعمارية:</strong> السحابة مركزية، بينما الضباب موزع.</li>
                    <li><strong>زمن الوصول:</strong> السحابة لديها زمن وصول أعلى، والضباب أقل.</li>
                    <li><strong>الموقع:</strong> معالجة السحابة بعيدة، بينما معالجة الضباب قريبة من الجهاز.</li>
                </ul>
                <h4>البيانات الضخمة (Big Data)</h4>
                <p>هي البيانات التي تتميز بكونها ذات تنوع أكبر، وتصل بكميات متزايدة، وبسرعة أعلى. وتُعرف بـ "Three Vs":</p>
                <ul>
                    <li><strong>الحجم (Volume):</strong> كميات هائلة من البيانات.</li>
                    <li><strong>السرعة (Velocity):</strong> سرعة توليد البيانات وتدفقها.</li>
                    <li><strong>التنوع (Variety):</strong> أشكال مختلفة من البيانات (منظمة، غير منظمة).</li>
                </ul>
                <p>إنترنت الأشياء هو مصدر رئيسي للبيانات الضخمة، حيث تولد مليارات الأجهزة بيانات بشكل مستمر.</p>
                <h4>تصور البيانات (Data Visualization):</h4>
                <p>هي عملية تمثيل البيانات والمعلومات في شكل رسومي (مثل الرسوم البيانية والمخططات) لجعلها أسهل في الفهم والتحليل.</p>
                <h4>أنواع الرسوم البيانية الشائعة لتصور البيانات:</h4>
                <ul>
                    <li>الرسم البياني العمودي (Column Chart)</li>
                    <li>الرسم البياني الخطي (Line Chart)</li>
                    <li>الرسم البياني الشريطي (Bar Chart)</li>
                    <li>المخطط المبعثر (Scatter Plot)</li>
                </ul>
            `,
            en: `
                <h4>Cloud Computing</h4>
                <p>"The Cloud" refers to servers that are accessed over the Internet, and the software and databases that run on those servers. Cloud computing allows users and companies to store data and run applications on remote infrastructure instead of on their local devices.</p>
                <h4>Fog Computing</h4>
                <p>Fog computing is a decentralized infrastructure that places storage and processing components at the "edge" of the cloud, closer to the data sources. This reduces latency and improves response time for applications requiring quick decisions.</p>
                <h4>Cloud vs. Fog Comparison:</h4>
                <ul>
                    <li><strong>Architecture:</strong> Cloud is centralized, while Fog is distributed.</li>
                    <li><strong>Latency:</strong> Cloud has higher latency, Fog has lower.</li>
                    <li><strong>Location:</strong> Cloud processing is remote, while Fog processing is close to the device.</li>
                </ul>
                <h4>Big Data</h4>
                <p>Big Data is data that contains greater variety, arriving in increasing volumes and with more velocity. It's known by the "Three Vs":</p>
                <ul>
                    <li><strong>Volume:</strong> Massive amounts of data.</li>
                    <li><strong>Velocity:</strong> The high speed at which data is generated and flows.</li>
                    <li><strong>Variety:</strong> Different forms of data (structured, unstructured).</li>
                </ul>
                <p>IoT is a major source of Big Data, as billions of devices continuously generate data.</p>
                <h4>Data Visualization:</h4>
                <p>It is the graphical representation of information and data (e.g., charts, graphs) to make it easier to understand and analyze.</p>
                <h4>Common Chart Types for Data Visualization:</h4>
                <ul>
                    <li>Column Chart</li>
                    <li>Line Chart</li>
                    <li>Bar Chart</li>
                    <li>Scatter Plot</li>
                </ul>
            `
        },
        quiz: [
            { question: "What does 'The Cloud' refer to in computing?", options: ["A weather phenomenon", "A single personal computer", "Servers, software, and databases accessed over the Internet", "A type of local network"], answer: 2, hint: "السحابة هي بنية تحتية ضخمة من الخوادم المتصلة عالميًا." },
            { question: "Which of the following is a benefit of cloud computing for individuals?", options: ["It makes your computer heavier", "It frees up local hard drive space", "It requires you to download all applications", "It only works on one device"], answer: 1, hint: "بدلاً من تخزين الملفات على جهازك، يمكنك تخزينها عبر الإنترنت." },
            { question: "Fog computing places processing power closer to the:", options: ["Center of the cloud", "Data source (edge devices)", "Mainframe computer", "End user's home"], answer: 1, hint: "الضباب هو امتداد للسحابة، ولكنه يقع عند 'حافة' الشبكة." },
            { question: "What is the main advantage of Fog Computing over Cloud Computing?", options: ["Higher storage capacity", "Centralized architecture", "Lower latency", "Higher cost"], answer: 2, hint: "القرب من مصدر البيانات يقلل من تأخير الاستجابة بشكل كبير." },
            { question: "The 'Three Vs' of Big Data are:", options: ["Volume, Velocity, Variety", "Value, Vision, Virtue", "Very, Very, Very Big", "Voice, Video, Veracity"], answer: 0, hint: "هذه هي الخصائص الثلاث الرئيسية التي تعرف البيانات الضخمة." },
            { question: "The 'Volume' in Big Data refers to:", options: ["The loudness of the data", "The format of the data", "The speed of the data", "The large amount of data"], answer: 3, hint: "الحجم يتعلق بكمية البيانات التي يتم إنشاؤها وتخزينها." },
            { question: "Which 'V' describes the different formats of data (e.g., text, images, video)?", options: ["Volume", "Velocity", "Variety", "Value"], answer: 2, hint: "التنوع يشير إلى الأشكال المختلفة التي يمكن أن تأتي بها البيانات." },
            { question: "IoT is a major generator of:", options: ["Small data", "Big Data", "No data", "Slow data"], answer: 1, hint: "مليارات الأجهزة المتصلة تنتج كميات هائلة من البيانات باستمرار." },
            { question: "Compared to Fog computing, Cloud computing has:", options: ["Lower latency", "Higher latency", "No latency", "Distributed architecture"], answer: 1, hint: "بسبب المسافة التي تقطعها البيانات، يكون لدى السحابة زمن وصول أعلى." },
            { question: "What is Data Mining?", options: ["Physically digging for data", "The process of searching and analyzing large datasets to find patterns", "Deleting old data", "A type of network"], answer: 1, hint: "التنقيب في البيانات هو استخراج 'المعرفة' القيمة من كميات كبيرة من البيانات." },
            { question: "Which type of chart is best for showing data changes over time?", options: ["Pie Chart", "Bar Chart", "Line Chart", "Scatter Plot"], answer: 2, hint: "الرسم البياني الخطي يربط النقاط بمرور الوقت لإظهار الاتجاهات." },
            { question: "A company that wants to reduce its on-site IT equipment would benefit from:", options: ["Buying more servers", "Cloud Computing", "Fog Computing only", "Hiring more IT staff"], answer: 1, hint: "تسمح السحابة للشركات 'باستئجار' البنية التحتية بدلاً من شرائها وإدارتها." },
            { question: "Which scenario is better suited for Fog Computing?", options: ["Long-term data archiving", "A self-driving car needing to make instant decisions", "Running a large social media platform", "Storing family photos"], answer: 1, hint: "السيارات ذاتية القيادة تتطلب استجابة فورية، وهو ما توفره الحوسبة الضبابية." },
            { question: "A dataset containing text from social media, sensor readings, and video files is an example of:", options: ["High Volume", "High Velocity", "High Variety", "High Value"], answer: 2, hint: "وجود أنواع متعددة من البيانات (نص، أرقام، فيديو) هو مثال على التنوع." },
            { question: "Security is a major concern in:", options: ["Cloud Computing only", "Big Data only", "Both Cloud Computing and Big Data", "Neither"], answer: 2, hint: "تأمين كميات هائلة من البيانات المخزنة على خوادم بعيدة هو تحدٍ كبير." },
            { question: "What does 'Data Visualization' mean?", options: ["Writing data down", "Presenting data in a graphical or pictorial format", "Hiding data", "Encrypting data"], answer: 1, hint: "الرسوم البيانية والمخططات هي أدوات لتصور البيانات وفهمها بسهولة." },
            { question: "Which network type connects devices across a city?", options: ["PAN (Personal Area Network)", "LAN (Local Area Network)", "MAN (Metropolitan Area Network)", "WAN (Wide Area Network)"], answer: 2, hint: "الشبكة الحضرية (MAN) تغطي منطقة جغرافية أكبر من الشبكة المحلية ولكن أصغر من الشبكة الواسعة." },
            { question: "The global network of computers that we call the Internet is an example of a:", options: ["PAN", "LAN", "MAN", "WAN"], answer: 3, hint: "الإنترنت هو أكبر شبكة واسعة النطاق، حيث يربط الشبكات في جميع أنحاء العالم." },
            { question: "What is a major problem in managing Big Data?", options: ["Having too little data", "Organizing data from many different sources", "Data that is too simple", "Data that never changes"], answer: 1, hint: "إدارة وتنظيم البيانات القادمة من مصادر متنوعة وبأشكال مختلفة يمثل تحديًا كبيرًا." },
            { question: "Which of these is NOT a primary characteristic of Fog computing?", options: ["Low latency", "Decentralized", "Close to the data source", "Long-term, deep analysis"], answer: 3, hint: "الحوسبة الضبابية تركز على التحليل السريع وقصير المدى، بينما التحليل العميق طويل المدى يتم عادة في السحابة." },

            // Final Exam 2022 Questions related to T4: Cloud Computing and Big Data
            { question: "Which of the following is an example of cloud computing?", options: ["Storing data on a local hard drive", "Storing data on an online drive", "Running a program on a local computer"], answer: 1, hint: "التخزين السحابي هو أحد أبرز استخدامات الحوسبة السحابية." },
            { question: "...refers to servers that are accessed over the Internet, and the software and databases that run on those servers.", options: ["Machine Learning", "Cloud", "Automation"], answer: 1, hint: "هذا هو التعريف الأساسي لمفهوم السحابة." },
            { question: "Big Data is data that contains greater variety, arriving in increasing volumes and with more velocity.", options: ["True", "False"], answer: 0, hint: "هذا التعريف يتوافق مع 'الثلاثة في' للبيانات الضخمة." },
            { question: "Cloud computing is decentralized, while fog computing is centralized", options: ["True", "False"], answer: 1, hint: "العكس هو الصحيح: السحابة مركزية والضباب لا مركزي." },
            // Midterm Revision Questions related to Cloud Computing, Fog Computing, and Edge Computing
            { question: "What is the primary function of a cloud service provider?", options: ["To sell hardware devices", "To deliver computing services over the internet", "To manage personal computers", "To install software on clients' machines"], answer: 1, hint: "يقدمون خدمات الحوسبة عبر الإنترنت." },
            { question: "What is a key benefit of cloud computing?", options: ["Reduced scalability", "Increased costs", "Reduced need for expensive hardware", "Limited access to services"], answer: 2, hint: "تقلل من الحاجة للاستثمار في الأجهزة المادية." },
            { question: "Which of the following is an example of Fog Computing?", options: ["Real-time analysis of traffic sensors in a smart city", "A smartphone processing data on the device itself", "A cloud data center storing video footage", "A car processing sensor data on the vehicle"], answer: 0, hint: "تحليل البيانات بالقرب من المصدر (مثل أجهزة استشعار المرور) هو مثال على الحوسبة الضبابية." },
            { question: "Which computing model involves processing data on a device itself?", options: ["Cloud Computing", "Fog Computing", "Edge Computing", "Distributed Computing"], answer: 2, hint: "الحوسبة الطرفية هي الأقرب إلى الجهاز." },
            { question: "In which scenario would Edge Computing be most beneficial?", options: ["Storing massive amounts of data in the cloud", "Processing data on a device with immediate response requirements", "Analyzing large datasets for future trends", "Managing backups for large corporations"], answer: 1, hint: "تتطلب الاستجابة الفورية المعالجة في أقرب نقطة ممكنة." },
            { question: "What is the primary advantage of Fog Computing over Cloud Computing?", options: ["Lower latency due to local data processing", "Higher scalability", "More data storage", "Processing happens entirely in the cloud"], answer: 0, hint: "القرب من مصدر البيانات يقلل من زمن الوصول." },
            { question: "Where is data typically processed in Fog Computing?", options: ["In the cloud", "At intermediate devices", "On the device itself", "In remote data centers"], answer: 1, hint: "الضباب يعمل بين السحابة والأجهزة الطرفية." },
            { question: "Which of the following is an example of Cloud Computing?", options: ["Processing data on a self-driving car", "Storing files and photos on Google Drive", "Managing real-time traffic data in a city", "Analyzing data on an IoT device"], answer: 1, hint: "خدمات التخزين عبر الإنترنت هي مثال نموذجي للحوسبة السحابية." },
            { question: "Which computing model is used when data is processed in remote data centers, like storing and accessing files on Google Drive?", options: ["Cloud Computing", "Fog Computing", "Edge Computing"], answer: 0, hint: "هذا هو التعريف المباشر للحوسبة السحابية." },
            { question: "In which computing model is data processed closer to the data source, such as using local sensors to manage traffic in a smart city?", options: ["Cloud Computing", "Fog Computing", "Edge Computing"], answer: 1, hint: "الحوسبة الضبابية تعمل عند حافة الشبكة." },
            { question: "Which computing model is used when a device, such as a self-driving car, processes sensor data directly on the vehicle with minimal delay?", options: ["Cloud Computing", "Fog Computing", "Edge Computing"], answer: 2, hint: "الاستجابة الفورية والحد الأدنى من التأخير هي سمة الحوسبة الطرفية." },
            { question: "Which computing model is best suited for applications that do not require immediate real-time processing and can benefit from centralized storage and analysis, like big data analytics?", options: ["Cloud Computing", "Fog Computing", "Edge Computing"], answer: 0, hint: "السحابة هي الأنسب للتحليلات الشاملة والبيانات الضخمة التي لا تتطلب استجابة فورية." },
            // Midterm Revision Questions related to Big Data
            { question: "What does 'Volume' refer to in Big Data?", options: ["The speed at which data is generated and processed", "The variety of formats in which data is generated", "The large amount of data requiring more storage space", "The ability to analyze data in real-time"], answer: 2, hint: "يشير إلى الكميات الهائلة من البيانات." },
            { question: "Which of the following describes the 'Velocity' of Big Data?", options: ["The amount of data generated by sensors", "The speed at which data is growing and needs to be processed", "The variety of data formats generated", "The size of the storage required for Big Data"], answer: 1, hint: "السرعة تعني مدى سرعة توليد ومعالجة البيانات." },
            { question: "What is meant by the 'Variety' of Big Data?", options: ["The need for faster data processing", "Data generated in different formats like text, images, and videos", "The amount of storage space required", "The speed at which data arrives in the system"], answer: 1, hint: "يشمل البيانات المنظمة وغير المنظمة وشبه المنظمة." },
            { question: "Which of the following is NOT a part of the Three Vs of Big Data?", options: ["Volume", "Velocity", "Value", "Variety"], answer: 2, hint: "القيمة (Value) غالبًا ما تُضاف ولكنها ليست جزءًا من الـ 3Vs الأصلية." },
            // Midterm Revision Questions related to Chart Types
            { question: "Which chart type uses vertical bars to represent data?", options: ["Line Chart", "Bar Chart", "Column Chart", "Scatter Plot"], answer: 2, hint: "الأعمدة الرأسية هي السمة المميزة لهذا النوع." },
            { question: "Which chart type is used to show how values are increasing or decreasing over time?", options: ["Column Chart", "Bar Chart", "Line Chart", "Pie Chart"], answer: 2, hint: "الرسوم البيانية الخطية مثالية لإظهار الاتجاهات بمرور الوقت." },
            { question: "What is the main difference between a Column Chart and a Bar Chart?", options: ["Column charts use vertical bars, while Bar charts use horizontal bars", "Column charts show trends over time, while Bar charts compare categories", "Column charts are used for percentages, while Bar charts show continuous data", "There is no difference between Column and Bar charts"], answer: 0, hint: "الاتجاه الرأسي مقابل الأفقي هو الفرق الرئيسي." },
            { question: "Which chart type is most suitable when category labels are long?", options: ["Column Chart", "Bar Chart", "Line Chart", "Pie Chart"], answer: 1, hint: "تسمح الأعمدة الأفقية بمساحة أكبر للتسميات الطويلة." }
        ]
    },
    {
        id: "T5",
        title: "Tutorial 5: Wireless Communication Systems",
        icon: "fa-broadcast-tower",
        summary: {
            ar: `
                <h3>نظم الاتصالات اللاسلكية (Wireless Communication Systems):</h3>
                <p>تستخدم نظم الاتصالات اللاسلكية تقنيات "عبر الهواء" لإنشاء قناة اتصالات بين نقطتين. تتميز هذه الأنظمة بالمرونة وتسهيل الحركة، وهي أساس إنترنت الأشياء.</p>
                <h4>مكونات نظام الاتصالات:</h4>
                <ul>
                    <li><strong>1. مرسل (Transmitter):</strong>
                        <ul>
                            <li><strong>الوظيفة:</strong> يقوم بتعديل الإشارة المدخلة لتحويلها إلى شكل مناسب للإرسال عبر قناة الاتصال.</li>
                            <li><strong>المكونات:</strong> يتضمن مرشح الضوضاء (Noise Filter)، محول تناظري-رقمي (Analog-to-Digital Converter)، مُشفر (Encoder)، مُعدِّل (Modulator)، ومضخم إشارة (Signal Amplifier).</li>
                        </ul>
                    </li>
                    <li><strong>2. قناة الاتصال (Communication Channel):</strong>
                        <ul>
                            <li><strong>الوظيفة:</strong> هي الوسط الذي تنتقل عبره الإشارة. في الاتصالات اللاسلكية، يكون الوسط هو الهواء أو الفضاء الحر.</li>
                            <li><strong>التحديات:</strong> تتعرض الإشارة للضوضاء (Noise) والتشويه (Distortion) خلال الانتقال في القناة.</li>
                        </ul>
                    </li>
                    <li><strong>3. مستقبل (Receiver):</strong>
                        <ul>
                            <li><strong>الوظيفة:</strong> يلتقط الإشارة المستقبلة ويعيد تحويلها إلى شكلها الأصلي بحيث يمكن للمستلم فهمها.</li>
                            <li><strong>المكونات:</strong> يتضمن مرشح الضوضاء (Noise Filter)، محول رقمي-تناظري (Digital-to-Analog Converter)، مفكك تشفير (Decoder)، مزيل تعديل (Demodulator)، ومضخم إشارة (Signal Amplifier).</li>
                        </ul>
                    </li>
                </ul>
                <h4>بروتوكولات إنترنت الأشياء (IoT Protocols):</h4>
                <p>تُعد بروتوكولات IoT ضرورية لأنها تُمكّن الأجهزة من تبادل البيانات. بدونها، ستكون الأجهزة عديمة الفائدة.</p>
                <ul>
                    <li><strong>Wi-Fi:</strong>
                        <ul>
                            <li><strong>المدى:</strong> قصير إلى متوسط.</li>
                            <li><strong>استهلاك الطاقة:</strong> عالي.</li>
                            <li><strong>الاستخدام:</strong> المنازل الذكية، البث المباشر.</li>
                        </ul>
                    </li>
                    <li><strong>Bluetooth:</strong>
                        <ul>
                            <li><strong>المدى:</strong> قصير.</li>
                            <li><strong>استهلاك الطاقة:</strong> منخفض (خاصة BLE).</li>
                            <li><strong>الاستخدام:</strong> الأجهزة القابلة للارتداء، الأجهزة الطبية.</li>
                        </ul>
                    </li>
                    <li><strong>Zigbee:</strong>
                        <ul>
                            <li><strong>المدى:</strong> متوسط (يدعم شبكات Mesh).</li>
                            <li><strong>استهلاك الطاقة:</strong> منخفض.</li>
                            <li><strong>الاستخدام:</strong> أتمتة المنازل الذكية، الشبكات اللاسلكية ذاتية التنظيم.</li>
                        </ul>
                    </li>
                    <li><strong>LoRaWAN:</strong>
                        <ul>
                            <li><strong>المدى:</strong> طويل جدًا (كيلومترات).</li>
                            <li><strong>استهلاك الطاقة:</strong> منخفض جدًا.</li>
                            <li><strong>الاستخدام:</strong> المدن الذكية، الزراعة، الأجهزة التي تعمل بالبطارية لفترات طويلة.</li>
                        </ul>
                    </li>
                    <li><strong>NFC (Near Field Communication):</strong>
                        <ul>
                            <li><strong>المدى:</strong> قصير جدًا (سنتيمترات).</li>
                            <li><strong>استهلاك الطاقة:</strong> منخفض جدًا.</li>
                            <li><strong>الاستخدام:</strong> الدفع بدون تلامس، بطاقات الوصول.</li>
                        </ul>
                    </li>
                </ul>
            `,
            en: `
                <h3>Wireless Communication Systems:</h3>
                <p>Wireless communication systems use "over the air" technologies to create a telecommunications channel between two points. These systems offer flexibility and mobility, forming the foundation of the Internet of Things.</p>
                <h4>Components of a Communication System:</h4>
                <ul>
                    <li><strong>1. Transmitter:</strong>
                        <ul>
                            <li><strong>Function:</strong> Modifies the input signal to convert it into a suitable form for transmission over the communication channel.</li>
                            <li><strong>Components:</strong> Includes a Noise Filter, Analog-to-Digital Converter, Encoder, Modulator, and Signal Amplifier.</li>
                        </ul>
                    </li>
                    <li><strong>2. Communication Channel:</strong>
                        <ul>
                            <li><strong>Function:</strong> The medium through which the signal travels. In wireless communication, the medium is air or free space.</li>
                            <li><strong>Challenges:</strong> The signal is subject to Noise and Distortion during transmission through the channel.</li>
                        </ul>
                    </li>
                    <li><strong>3. Receiver:</strong>
                        <ul>
                            <li><strong>Function:</strong> Captures the received signal and converts it back to its original form so that the recipient can understand it.</li>
                            <li><strong>Components:</strong> Includes a Noise Filter, Digital-to-Analog Converter, Decoder, Demodulator, and Signal Amplifier.</li>
                        </ul>
                    </li>
                </ul>
                <h4>IoT Protocols:</h4>
                <p>IoT protocols are essential because without them, hardware would be useless and data could not be exchanged.</p>
                <ul>
                    <li><strong>Wi-Fi:</strong>
                        <ul>
                            <li><strong>Range:</strong> Short to medium.</li>
                            <li><strong>Power Consumption:</strong> High.</li>
                            <li><strong>Usage:</strong> Smart homes, video streaming.</li>
                        </ul>
                    </li>
                    <li><strong>Bluetooth:</strong>
                        <ul>
                            <li><strong>Range:</strong> Short.</li>
                            <li><strong>Power Consumption:</strong> Low (especially BLE).</li>
                            <li><strong>Usage:</strong> Wearables, medical devices.</li>
                        </ul>
                    </li>
                    <li><strong>Zigbee:</strong>
                        <ul>
                            <li><strong>Range:</strong> Medium (supports Mesh networks).</li>
                            <li><strong>Power Consumption:</strong> Low.</li>
                            <li><strong>Usage:</strong> Smart home automation, self-organizing wireless networks.</li>
                        </ul>
                    </li>
                    <li><strong>LoRaWAN:</strong>
                        <ul>
                            <li><strong>Range:</strong> Very long (kilometers).</li>
                            <li><strong>Power Consumption:</strong> Very low.</li>
                            <li><strong>Usage:</strong> Smart cities, agriculture, long-life battery-powered devices.</li>
                        </ul>
                    </li>
                    <li><strong>NFC (Near Field Communication):</strong>
                        <ul>
                            <li><strong>Range:</strong> Very short (centimeters).</li>
                            <li><strong>Power Consumption:</strong> Very low.</li>
                            <li><strong>Usage:</strong> Contactless payment, access cards.</li>
                        </ul>
                    </li>
                </ul>
            `
        },
        quiz: [
            { question: "What is the primary function of a Transmitter in a communication system?", options: ["To receive signals", "To convert input signals for transmission", "To store data", "To analyze data"], answer: 1, hint: "المرسل هو الذي يهيئ الإشارة للرحلة." },
            { question: "Which component of a communication system is the medium through which the signal travels?", options: ["Transmitter", "Receiver", "Communication Channel", "Antenna"], answer: 2, hint: "القناة هي المسار الفعلي للإشارة." },
            { question: "What is the purpose of a Modulator in a Transmitter?", options: ["To amplify the signal", "To remove noise", "To convert digital to analog signals", "To encode information onto a carrier wave for transmission"], answer: 3, hint: "التعديل ضروري لنقل الإشارة عبر الوسط اللاسلكي." },
            { question: "Which of the following is a component of a Receiver?", options: ["Encoder", "Modulator", "Demodulator", "Analog-to-Digital Converter"], answer: 2, hint: "مزيل التعديل يعكس عملية التعديل لاستعادة الإشارة الأصلية." },
            { question: "What does Zigbee use to extend its range and improve reliability in smart home applications?", options: ["High power consumption", "Direct satellite connection", "Mesh networking", "Very high bandwidth"], answer: 2, hint: "شبكات Mesh تسمح للأجهزة بالعمل كمكررات للإشارة." },
            { question: "Which IoT protocol is known for its very long range and very low power consumption, making it suitable for remote sensors?", options: ["Wi-Fi", "Bluetooth", "LoRaWAN", "NFC"], answer: 2, hint: "LoRaWAN مصمم خصيصًا لتطبيقات إنترنت الأشياء واسعة النطاق ومنخفضة الطاقة." },
            { question: "What is a disadvantage of using Wi-Fi for battery-powered IoT devices?", options: ["Very short range", "Low bandwidth", "High power consumption", "Lack of security"], answer: 2, hint: "يستهلك الواي فاي طاقة أكبر مقارنة ببروتوكولات أخرى مثل BLE أو LoRaWAN." },
            { question: "NFC is primarily used for applications requiring:", options: ["Long-range communication", "High-speed data transfer", "Very short-range, contactless interaction", "Video streaming"], answer: 2, hint: "مثل الدفع عبر الهاتف أو قراءة البطاقات على مسافة قريبة جدًا." },
            { question: "Noise and Distortion are challenges typically encountered in which part of a communication system?", options: ["Transmitter", "Receiver", "Communication Channel", "User Interface"], answer: 2, hint: "القناة هي حيث تتأثر الإشارة بالعوامل الخارجية." },
            { question: "What is the role of an Analog-to-Digital Converter (ADC) in a communication system?", options: ["To convert digital signals to analog", "To convert analog signals from sensors into digital data for processing", "To amplify analog signals", "To filter out noise from digital signals"], answer: 1, hint: "ضروري لتحويل الإشارات الفيزيائية إلى بيانات يمكن معالجتها رقميًا." },
            { question: "Which of these IoT protocols is best for wearable devices that connect to a smartphone over a few meters?", options: ["Wi-Fi", "LoRaWAN", "Bluetooth Low Energy (BLE)", "Zigbee"], answer: 2, hint: "BLE مثالي للاتصال قصير المدى ومنخفض الطاقة." },
            { question: "A system that uses 'over the air' technologies to create a telecommunications channel is called:", options: ["Wired Communication System", "Optical Fiber System", "Wireless Communication System", "Satellite Imaging System"], answer: 2, hint: "السمة الرئيسية هي عدم وجود أسلاك مادية." },
            { question: "What is the primary function of an 'Encoder' in a Transmitter?", options: ["To convert digital data into analog format", "To add redundancy and structure to data for error correction and efficient transmission", "To remove noise from the signal", "To convert the signal back to its original form"], answer: 1, hint: "المشفر يجهز البيانات للنقل الموثوق والآمن." },
            { question: "Which component in a Receiver performs the inverse function of a Modulator?", options: ["Encoder", "Demodulator", "Amplifier", "Filter"], answer: 1, hint: "يقوم بإزالة التعديل لاستعادة المعلومات الأصلية." },
            { question: "For an application like smart street lighting where lights are connected to a LoRa gateway, which protocol would be used?", options: ["Wi-Fi", "Bluetooth", "LoRaWAN", "NFC"], answer: 2, hint: "LoRaWAN مناسب لهذه التطبيقات بسبب مداه الطويل واستهلاك الطاقة المنخفض." },
            { question: "What is the main goal of using IoT protocols?", options: ["To make hardware useless", "To enable devices to exchange data and communicate effectively", "To increase complexity in networks", "To prevent devices from connecting"], answer: 1, hint: "البروتوكولات هي قواعد التواصل التي تجعل إنترنت الأشياء ممكنًا." },
            { question: "Which of the following is NOT a challenge in the Communication Channel?", options: ["Noise", "Distortion", "Signal Amplification (it's a solution)", "Interference"], answer: 2, hint: "التضخيم هو طريقة لمعالجة المشكلات، وليس مشكلة بحد ذاتها." },
            { question: "What is the range of NFC (Near Field Communication)?", options: ["Several kilometers", "Up to 100 meters", "A few centimeters", "Global coverage"], answer: 2, hint: "إنها تقنية اتصال قصيرة جدًا، وتتطلب تقريب الأجهزة." },
            { question: "Which of these protocols is commonly used for peer-to-peer device communication but generally requires closer proximity than Wi-Fi?", options: ["LoRaWAN", "Cellular", "Bluetooth", "Ethernet"], answer: 2, hint: "البلوتوث يستخدم للاتصالات بين جهازين قريبين." },
            { question: "What type of signal does an Analog-to-Digital Converter (ADC) output?", options: ["Analog signal", "Digital signal", "Radio signal", "Light signal"], answer: 1, hint: "يحول الإشارات المستمرة إلى قيم رقمية متقطعة." },

            // Final Exam 2022 Questions related to T5: Wireless Communication Systems
            { question: "List Three components of Receiver in the network Layer", options: ["noise filter, demodulator, decoder", "modulator, encoder, amplifier", "sensor, actuator, gateway"], answer: 0, hint: "هذه هي المكونات الرئيسية للمستقبل التي تقوم بإعادة بناء الإشارة." },
        ]
    },
    {
        id: "T6",
        title: "Tutorial 6: Automation and Machine Learning",
        icon: "fa-robot",
        summary: {
            ar: `
                <h4>الأتمتة (Automation)</h4>
                <p>الأتمتة هي أي عملية تتم بشكل ذاتي وتقلل من الحاجة إلى التدخل البشري. الهدف منها هو زيادة الإنتاجية والجودة، تقليل التكاليف، وزيادة الأمان. في سياق إنترنت الأشياء، تسمح الأتمتة للأجهزة بالعمل معًا بشكل مستقل لاتخاذ قرارات وتنفيذ إجراءات، مثل ضبط منظم الحرارة تلقائيًا بناءً على وجودك في المنزل.</p>
                <h4>تعلم الآلة (Machine Learning)</h4>
                <p>تعلم الآلة هو فرع من الذكاء الاصطناعي يهتم ببرامج الحاسوب التي تحسن أداءها تلقائيًا من خلال الخبرة. بدلاً من برمجة القواعد بشكل صريح، يتم "تدريب" الخوارزميات على مجموعة كبيرة من البيانات لتتعلم الأنماط وتتخذ القرارات.</p>
                <ul>
                    <li><strong>التعلم الخاضع للإشراف (Supervised Learning):</strong> يتم تدريب النموذج على بيانات مصنفة (labeled data). الهدف هو التنبؤ بالتصنيف لبيانات جديدة. (مثال: تصنيف رسائل البريد الإلكتروني إلى عادية أو مزعجة).</li>
                    <li><strong>التعلم غير الخاضع للإشراف (Unsupervised Learning):</strong> يتم تدريب النموذج على بيانات غير مصنفة. الهدف هو اكتشاف الأنماط أو التجمعات (clusters) المخفية في البيانات.</li>
                </ul>
                <p>في إنترنت الأشياء، يُستخدم تعلم الآلة لتحليل بيانات المستشعرات، التنبؤ بالأعطال، والتعرف على الأنماط السلوكية.</p>
            `,
            en: `
                <h4>Automation</h4>
                <p>Automation is any process that is self-driven and reduces the need for human intervention. Its goal is to increase productivity and quality, reduce costs, and increase safety. In the context of IoT, automation allows devices to work together autonomously to make decisions and perform actions, such as automatically adjusting a thermostat based on your presence at home.</p>
                <h4>Machine Learning (ML)</h4>
                <p>Machine Learning is a branch of artificial intelligence concerned with computer programs that automatically improve their performance through experience. Instead of being explicitly programmed with rules, algorithms are 'trained' on large sets of data to learn patterns and make decisions.</p>
                <ul>
                    <li><strong>Supervised Learning:</strong> The model is trained on labeled data. The goal is to predict the label for new data. (Example: Classifying emails as spam or not spam).</li>
                    <li><strong>Unsupervised Learning:</strong> The model is trained on unlabeled data. The goal is to discover hidden patterns or clusters in the data.</li>
                </ul>
                <p>In IoT, Machine Learning is used to analyze sensor data, predict failures, and recognize behavioral patterns.</p>
            `
        },
        quiz: [
            { question: "What is the main goal of automation?", options: ["To increase human intervention", "To reduce productivity", "To reduce the need for human control", "To make processes more complex"], answer: 2, hint: "الهدف هو جعل المهام تتم بشكل تلقائي." },
            { question: "Machine Learning is a subfield of which broader field?", options: ["Data Storage", "Networking", "Artificial Intelligence (AI)", "Graphic Design"], answer: 2, hint: "تعلم الآلة هو أحد فروع الذكاء الاصطناعي الذي يركز على تمكين الأنظمة من التعلم من البيانات." },
            { question: "What is the key difference between Traditional Programming and Machine Learning?", options: ["ML uses data to create the program", "Traditional programming uses more data", "ML does not produce an output", "There is no difference"], answer: 0, hint: "في البرمجة التقليدية، نكتب القواعد. في تعلم الآلة، الآلة تتعلم القواعد من البيانات." },
            { question: "In which type of learning is the model trained on data with labels?", options: ["Unsupervised Learning", "Supervised Learning", "Reinforcement Learning", "Automated Learning"], answer: 1, hint: "وجود 'إشراف' يعني أن البيانات التدريبية تحتوي على الإجابات الصحيحة (التصنيفات)." },
            { question: "Email spam filtering is a classic example of:", options: ["Unsupervised Learning", "Supervised Learning (Classification)", "Data Storage", "Hardware Design"], answer: 1, hint: "يتم تدريب النظام على أمثلة من رسائل البريد العشوائي والرسائل العادية." },
            { question: "The goal of Unsupervised Learning is often to:", options: ["Predict a specific value", "Follow explicit instructions", "Discover hidden clusters or patterns in data", "Verify existing labels"], answer: 2, hint: "عندما لا تكون لدينا تصنيفات مسبقة، نحاول إيجاد مجموعات متشابهة داخل البيانات." },
            { question: "Which of these is NOT a benefit of automation?", options: ["Increased efficiency", "Reduced costs", "Increased human error", "Improved accuracy"], answer: 2, hint: "الأتمتة تهدف إلى تقليل الأخطاء البشرية، وليس زيادتها." },
            { question: "What does a machine learning model 'learn' from?", options: ["Electricity", "Air", "Experience (Data)", "User opinions"], answer: 2, hint: "البيانات هي 'الخبرة' التي يستخدمها نموذج تعلم الآلة لتحسين أدائه." },
            { question: "Identifying groups of customers with similar purchasing habits is an example of:", options: ["Supervised Learning", "Unsupervised Learning (Clustering)", "Traditional Programming", "Automation"], answer: 1, hint: "نحن لا نعرف المجموعات مسبقًا، بل نطلب من الخوارزمية اكتشافها." },
            { question: "Predicting a house price based on its features (size, location) is an example of:", options: ["Supervised Learning (Regression)", "Unsupervised Learning", "Automation", "Data Visualization"], answer: 0, hint: "عندما يكون الهدف هو التنبؤ بقيمة رقمية مستمرة، فهذا يسمى 'الانحدار' (Regression)، وهو نوع من التعلم المشرف." },
            { question: "What is the 'training data' in machine learning?", options: ["The program's final code", "The data used to teach the model", "The new data the model has never seen", "The hardware specifications"], answer: 1, hint: "هي مجموعة البيانات الأولية التي تستخدم لبناء النموذج وتدريبه." },
            { question: "An automated system in a smart factory that improves its own processes is an example of:", options: ["Industry 4.0", "Web 2.0", "Simple Manufacturing", "Manual Labor"], answer: 0, hint: "الثورة الصناعية الرابعة (Industry 4.0) تتميز بالمصانع الذكية والأتمتة المتقدمة." },
            { question: "Amazon Alexa and Google Assistant are examples of automation in:", options: ["Manufacturing", "Smart Homes", "Healthcare", "Transportation"], answer: 1, hint: "هذه الأنظمة تسمح بالتحكم في الأجهزة المنزلية صوتيًا." },
            { question: "What is a 'label' in the context of supervised learning?", options: ["The name of the algorithm", "A sticker on the computer", "The correct answer or category for a piece of training data", "A type of sensor"], answer: 2, hint: "التصنيف هو الجواب الصحيح الذي نريد من النموذج أن يتعلم التنبؤ به." },
            { question: "The main goal when fitting a line to data points in regression is to:", options: ["Connect all points perfectly", "Pass through the first and last points", "Maximize the error", "Minimize the error between the line and the points"], answer: 3, hint: "نريد أن يكون الخط 'أفضل تمثيل' للبيانات، أي أقرب ما يمكن لجميع النقاط." },
            { question: "Which of the following is an application of Machine Learning?", options: ["Google Translate", "Gmail Smart Reply", "Spam Filtering", "All of the above"], answer: 3, hint: "كل هذه الخدمات تعتمد بشكل كبير على نماذج تعلم الآلة لفهم اللغة والتنبؤ بها." },
            { question: "Using technology to automatically perform medical tests and assist in diagnosis is an application of:", options: ["Manual data entry", "Automation and AI in healthcare", "Retail automation", "Social media"], answer: 1, hint: "يمكن للآلات تحليل الصور والفحوصات الطبية بدقة قد تفوق الإنسان في بعض الحالات." },
            { question: "What is the 'knowledge engineering bottleneck'?", options: ["A lack of data", "The difficulty of manually creating complex sets of rules for a system", "A hardware limitation", "A slow network connection"], answer: 1, hint: "تعلم الآلة يساعد في التغلب على هذه المشكلة بجعل النظام يتعلم القواعد بنفسه." },
            { question: "Which of these is NOT a primary goal of Machine Learning?", options: ["Discovering new knowledge from data", "Replacing tasks that require intelligence", "Developing systems that adapt to users", "Creating programs that never change"], answer: 3, hint: "القدرة على التكيف والتحسين مع مرور الوقت هي من صميم تعلم الآلة." },
            { question: "Self-serve kiosks in fast-food restaurants are a form of:", options: ["Machine Learning", "Automation", "Cloud Computing", "Data Mining"], answer: 1, hint: "هذه الأكشاك تقوم بمهمة كانت تتطلب تدخلاً بشريًا (أخذ الطلبات)." },

            // Final Exam 2022 Questions related to T6: Automation and Machine Learning
            { question: "Which of the following is not a benefit of automation?", options: ["Increased efficiency", "Improved accuracy", "Reduced costs", "Increased human error"], answer: 3, hint: "الأتمتة تهدف إلى تقليل الأخطاء البشرية." },
            { question: "What is automation?", options: ["The use of technology to perform tasks without human intervention", "The use of technology to store and analyze data", "The use of technology to visualize data", "The use of technology to communicate with customers"], answer: 0, hint: "الأتمتة هي أتمتة المهام لتقليل التدخل البشري." },
            { question: "Which of the following is an example of artificial intelligence?", options: ["Using a calculator to perform mathematical calculations", "Playing a game of chess against a computer program", "Reading a book", "Writing a letter by hand"], answer: 1, hint: "الذكاء الاصطناعي يتضمن القدرة على التفكير واتخاذ القرارات كما يفعل البشر." },
            { question: "Which of the following is an example of a task that artificial intelligence can perform better than human intelligence?", options: ["Recognizing faces in a crowd", "Understanding emotions", "Solving complex mathematical equations", "Creating art"], answer: 0, hint: "الذكاء الاصطناعي يتفوق في معالجة كميات كبيرة من البيانات وتحديد الأنماط." },
            { question: "Artificial intelligence can learn from experience, while human intelligence cannot", options: ["True", "False"], answer: 1, hint: "البشر يتعلمون من التجربة أيضًا؛ الذكاء الاصطناعي يحاكي هذه القدرة." },
            { question: "List three applications of Automation", options: ["smart home automation, medical diagnosis, industrial IoT and smart factories"], answer: 0, hint: "تُستخدم الأتمتة في مجالات متعددة لزيادة الكفاءة." },
        ]
    },
    {
        id: "T7",
        title: "Tutorial 7: IoT and AI/ML Integration",
        icon: "fa-brain",
        summary: {
            ar: `
                <h3>تكامل إنترنت الأشياء والذكاء الاصطناعي/التعلم الآلي (IoT and AI/ML Integration):</h3>
                <p>يُعد تكامل إنترنت الأشياء (IoT) مع الذكاء الاصطناعي (AI) والتعلم الآلي (ML) من أهم التطورات التي تعزز قدرة أنظمة IoT على اتخاذ قرارات ذكية، تحليل البيانات المعقدة، والعمل بشكل مستقل. يضيف الذكاء الاصطناعي 'الذكاء' إلى 'الأشياء' المتصلة.</p>
                <h4>لماذا يتم دمج AI/ML مع IoT؟</h4>
                <ul>
                    <li><strong>تحليل البيانات الضخمة (Big Data Analytics):</strong> أجهزة IoT تولد كميات هائلة من البيانات. يستخدم AI/ML لتحليل هذه البيانات بسرعة وفعالية لاستخلاص رؤى ذات قيمة.</li>
                    <li><strong>اتخاذ القرارات الذكية (Intelligent Decision Making):</strong> تمكين الأجهزة من اتخاذ قرارات تلقائية بناءً على البيانات التي تم تحليلها (مثل ضبط درجة حرارة الغرفة بناءً على أنماط استخدام المستخدم).</li>
                    <li><strong>التنبؤ (Prediction):</strong> استخدام نماذج التعلم الآلي للتنبؤ بالأعطال المحتملة في المعدات (الصيانة التنبؤية)، أو أنماط الطلب، أو سلوك المستخدم.</li>
                    <li><strong>التعرف على الأنماط (Pattern Recognition):</strong> اكتشاف الأنماط المعقدة في البيانات التي قد لا تكون واضحة للمبرمجين، مثل التعرف على الوجوه أو الكلام.</li>
                    <li><strong>الأتمتة المحسّنة (Enhanced Automation):</strong> جعل الأنظمة المؤتمتة أكثر مرونة واستجابة للظروف المتغيرة.</li>
                </ul>

                <h4>مواقع دمج AI/ML في بنية IoT:</h4>
                <ul>
                    <li><strong>الحوسبة السحابية (Cloud-based AI/ML):</strong> تتم معالجة وتحليل البيانات وتدريب النماذج في مراكز بيانات سحابية قوية. مناسبة للمهام المعقدة التي تتطلب موارد حوسبة ضخمة.</li>
                    <li><strong>الحوسبة الطرفية/الضبابية (Edge/Fog AI/ML):</strong> يتم تنفيذ جزء من معالجة البيانات وتحليلها، وحتى تشغيل نماذج ML الخفيفة، على أجهزة أقرب إلى مصدر البيانات (مثل البوابات الذكية أو حتى الأجهزة نفسها). هذا يقلل من زمن الاستجابة، يقلل من استهلاك النطاق الترددي، ويحسن الخصوصية.</li>
                    <li><strong>AI على الجهاز (On-Device AI - TinyML):</strong> تنفيذ نماذج ML بسيطة جدًا وموفرة للطاقة مباشرة على المتحكمات الدقيقة أو الأجهزة الصغيرة جدًا.</li>
                </ul>

                <h4>تطبيقات شائعة لتكامل IoT و AI/ML:</h4>
                <ul>
                    <li><strong>المدن الذكية (Smart Cities):</strong> تحسين إدارة المرور، استهلاك الطاقة، جمع النفايات بناءً على البيانات والتحليلات التنبؤية.</li>
                    <li><strong>الرعاية الصحية الذكية (Smart Healthcare):</strong> مراقبة المرضى عن بُعد، التشخيص المبكر للأمراض، وتخصيص العلاج.</li>
                    <li><strong>الزراعة الذكية (Smart Agriculture):</strong> تحسين الري، مراقبة صحة المحاصيل، والتنبؤ بالغلات باستخدام مستشعرات البيانات ونماذج التعلم الآلي.</li>
                    <li><strong>الصيانة التنبؤية (Predictive Maintenance):</strong> تحليل بيانات أجهزة الاستشعار من الآلات للتنبؤ بالأعطال قبل حدوثها، مما يقلل من وقت التوقف عن العمل والتكاليف.</li>
                    <li><strong>المنازل الذكية (Smart Homes):</strong> التحكم التكيفي في الإضاءة والتدفئة والتبريد بناءً على أنماط استخدام السكان.</li>
                    <li><strong>المركبات ذاتية القيادة (Autonomous Vehicles):</strong> تستخدم بيانات المستشعرات (كاميرات، رادار) مع التعلم الآلي لاتخاذ قرارات القيادة.</li>
                </ul>
            `,
            en: `
                <h3>IoT and AI/ML Integration:</h3>
                <p>The integration of the Internet of Things (IoT) with Artificial Intelligence (AI) and Machine Learning (ML) is a crucial development that enhances the ability of IoT systems to make intelligent decisions, analyze complex data, and operate autonomously. AI adds 'intelligence' to interconnected 'things'.</p>
                <h4>Why Integrate AI/ML with IoT?</h4>
                <ul>
                    <li><strong>Big Data Analytics:</strong> IoT devices generate massive amounts of data. AI/ML is used to analyze this data quickly and efficiently to extract valuable insights.</li>
                    <li><strong>Intelligent Decision Making:</strong> Enabling devices to make automated decisions based on analyzed data (e.g., adjusting room temperature based on user usage patterns).</li>
                    <li><strong>Prediction:</strong> Using machine learning models to predict potential equipment failures (predictive maintenance), demand patterns, or user behavior.</li>
                    <li><strong>Pattern Recognition:</strong> Detecting complex patterns in data that might not be obvious to programmers, such as facial or speech recognition.</li>
                    <li><strong>Enhanced Automation:</strong> Making automated systems more flexible and responsive to changing conditions.</li>
                </ul>

                <h4>Locations for AI/ML Integration in IoT Architecture:</h4>
                <ul>
                    <li><strong>Cloud-based AI/ML:</strong> Data processing, analysis, and model training occur in powerful cloud data centers. Suitable for complex tasks requiring massive computing resources.</li>
                    <li><strong>Edge/Fog AI/ML:</strong> A portion of data processing, analysis, and even running lightweight ML models are performed on devices closer to the data source (e.g., smart gateways or even the devices themselves). This reduces latency, decreases bandwidth consumption, and improves privacy.</li>
                    <li><strong>On-Device AI (TinyML):</strong> Implementing very simple, power-efficient ML models directly on microcontrollers or very small devices.</li>
                </ul>

                <h4>Common Applications of IoT and AI/ML Integration:</h4>
                <ul>
                    <li><strong>Smart Cities:</strong> Optimizing traffic management, energy consumption, and waste collection based on data and predictive analytics.</li>
                    <li><strong>Smart Healthcare:</strong> Remote patient monitoring, early disease diagnosis, and personalized treatment.</li>
                    <li><strong>Smart Agriculture:</strong> Optimizing irrigation, monitoring crop health, and predicting yields using data sensors and machine learning models.</li>
                    <li><strong>Predictive Maintenance:</strong> Analyzing sensor data from machinery to predict failures before they occur, reducing downtime and costs.</li>
                    <li><strong>Smart Homes:</strong> Adaptive control of lighting, heating, and cooling based on occupants' usage patterns.</li>
                    <li><strong>Autonomous Vehicles:</strong> Using sensor data (cameras, radar) with machine learning to make driving decisions.</li>
                </ul>
            `
        },
        quiz: [
            { question: "What is the primary benefit of integrating AI/ML with IoT?", options: ["To reduce the number of connected devices", "To enable IoT systems to make intelligent decisions and analyze complex data", "To simplify device manufacturing", "To increase power consumption of devices"], answer: 1, hint: "الذكاء الاصطناعي يجعل الأنظمة أكثر ذكاءً وقدرة على الاستجابة." },
            { question: "Where would a complex machine learning model requiring significant computing power most likely be trained and run in an IoT system?", options: ["On a tiny microcontroller", "At the network edge (edge computing)", "In a cloud-based AI/ML platform", "Directly on a sensor"], answer: 2, hint: "المهام المعقدة تتطلب موارد حوسبة مركزية وضخمة." },
            { question: "What is 'Predictive Maintenance' in IoT, enhanced by AI/ML?", options: ["Repairing equipment after it breaks down", "Analyzing sensor data from machinery to predict failures before they occur", "Manually inspecting equipment daily", "Ignoring equipment health until a problem arises"], answer: 1, hint: "الهدف هو التنبؤ بالمشكلات لتجنب التوقف غير المخطط له." },
            { question: "Which term describes running lightweight ML models directly on very small, power-efficient microcontrollers?", options: ["Cloud AI", "Edge AI", "TinyML", "Big Data Analytics"], answer: 2, hint: "يركز هذا المفهوم على الذكاء الاصطناعي على أصغر الأجهزة." },
            { question: "What advantage does 'Edge AI' provide over 'Cloud AI' in certain IoT applications?", options: ["Unlimited processing power", "Reduced latency, decreased bandwidth consumption, and improved privacy", "Higher cost of deployment", "Less complex data analysis capabilities"], answer: 1, hint: "يجلب المعالجة أقرب إلى مصدر البيانات." },
            { question: "Which of these is NOT a common application of IoT and AI/ML integration?", options: ["Smart Cities", "Traditional paper filing systems", "Smart Healthcare", "Autonomous Vehicles"], answer: 1, hint: "أنظمة الملفات الورقية التقليدية لا تستفيد من هذه التقنيات." },
            { question: "Analyzing vast amounts of data generated by IoT devices to extract valuable insights is a core function of:", options: ["Manual data entry", "Big Data Analytics (enhanced by AI/ML)", "Simple data storage", "Basic sensor reading"], answer: 1, hint: "الذكاء الاصطناعي والتعلم الآلي ضروريان للتعامل مع حجم بيانات IoT الهائل." },
            { question: "What enables IoT devices to make automated decisions based on analyzed data?", options: ["Fixed programming", "Random behavior", "Intelligent Decision Making (powered by AI/ML)", "Human intervention for every decision"], answer: 2, hint: "تسمح هذه القدرة للأنظمة بالعمل بذكاء ذاتي." },
            { question: "Optimizing irrigation and monitoring crop health in agriculture using IoT sensors and ML models is an example of:", options: ["Traditional farming", "Smart Agriculture", "Urban planning", "Industrial automation"], answer: 1, hint: "التكنولوجيا لتحسين الإنتاجية الزراعية." },
            { question: "Why is 'Pattern Recognition' crucial in IoT and AI/ML integration?", options: ["To make devices consume more power", "To detect complex patterns in data that humans might miss", "To simplify basic data collection", "To increase the physical size of devices"], answer: 1, hint: "يساعد في اكتشاف الأنماط الخفية لاتخاذ قرارات أفضل." },
            { question: "Which of the following describes 'Enhanced Automation' with AI/ML?", options: ["Automation that is rigid and unchanging", "Making automated systems more flexible and responsive to changing conditions", "Automation that requires constant human supervision", "Automation that always fails"], answer: 1, hint: "الذكاء الاصطناعي يضيف القدرة على التكيف للأتمتة." },
            { question: "Remote patient monitoring and early disease diagnosis are applications in which sector?", options: ["Smart Retail", "Smart Manufacturing", "Smart Healthcare", "Smart Logistics"], answer: 2, hint: "تُحدث ثورة في طريقة تقديم الرعاية الطبية." },
            { question: "What is a benefit of performing AI/ML at the edge (Edge AI)?", options: ["Requires more cloud resources", "Increases network latency", "Improves data privacy and reduces bandwidth", "Only suitable for very complex models"], answer: 2, hint: "معالجة البيانات محليًا تقلل من الحاجة لإرسال جميع البيانات إلى السحابة." },
            { question: "Autonomous vehicles use AI/ML to:", options: ["Control basic headlights", "Make driving decisions based on sensor data (cameras, radar)", "Play music for passengers", "Manually steer the car"], answer: 1, hint: "التعلم الآلي هو جوهر اتخاذ القرارات في المركبات ذاتية القيادة." },
            { question: "What type of AI/ML integration is suitable for tasks requiring massive computing resources and deep learning model training?", options: ["On-Device AI", "Edge AI", "Cloud-based AI/ML", "Fog AI"], answer: 2, hint: "السحابة توفر الموارد اللازمة للتدريب على نطاق واسع." },
            { question: "What is the primary advantage of 'TinyML'?", options: ["High processing power", "Running on large servers", "Extremely low power consumption and small footprint", "Complex data visualization"], answer: 2, hint: "مثالي للأجهزة الصغيرة جدًا ذات الموارد المحدودة." },
            { question: "Which of the following describes the relationship between IoT and AI/ML?", options: ["They are completely separate fields", "AI/ML provides the 'intelligence' and analytical capabilities for the data collected by IoT", "IoT replaces the need for AI/ML", "AI/ML is only used for data storage in IoT"], answer: 1, hint: "إنترنت الأشياء يجمع البيانات، والذكاء الاصطناعي/التعلم الآلي يستخلص القيمة منها." },
            { question: "In smart cities, AI/ML is used to optimize:", options: ["Only building construction", "Traffic management, energy consumption, and waste collection", "Individual device power settings", "Manual record keeping"], answer: 1, hint: "يساعد في إدارة وتحسين البنية التحتية والخدمات الحضرية." },
            { question: "What is the main challenge that AI/ML helps overcome in IoT data analysis?", options: ["Lack of data", "The difficulty of processing and finding insights in massive, complex datasets", "Too few connected devices", "Slow internet connections"], answer: 1, hint: "تحليل البيانات الضخمة يدويًا أو بالأساليب التقليدية أمر مستحيل." },
            { question: "Which layer of IoT architecture typically integrates AI/ML for deep analysis and insights?", options: ["Perception Layer", "Network Layer", "Application Layer", "Cloud Data Processing Layer"], answer: 3, hint: "تتم معظم التحليلات المعقدة وتدريب النماذج في السحابة." },
        ]
    },
    {
        id: "T8",
        title: "Tutorial 8: IoT in Practice & Future Trends",
        icon: "fa-cogs",
        summary: {
            ar: `
                <h3>إنترنت الأشياء في الممارسة والتوجهات المستقبلية (IoT in Practice & Future Trends):</h3>
                <p>يتطور إنترنت الأشياء بسرعة، وهناك العديد من الاتجاهات والتطبيقات العملية التي تشكل مستقبله.</p>
                <h4>أمثلة عملية لتطبيقات IoT:</h4>
                <ul>
                    <li><strong>المدن الذكية (Smart Cities):</strong>
                        <ul>
                            <li><strong>إدارة المرور الذكية:</strong> مستشعرات تراقب تدفق حركة المرور، وتُرسل البيانات لتحسين إشارات المرور وتوجيه المركبات.</li>
                            <li><strong>إدارة النفايات:</strong> مستشعرات في حاويات القمامة تُبلغ عندما تكون ممتلئة، مما يحسن جداول جمع النفايات.</li>
                            <li><strong>مراقبة جودة الهواء:</strong> مستشعرات تُراقب مستويات التلوث وتوفر بيانات للمواطنين والسلطات.</li>
                        </ul>
                    </li>
                    <li><strong>الزراعة الذكية (Smart Agriculture):</strong>
                        <ul>
                            <li><strong>مراقبة التربة والمحاصيل:</strong> مستشعرات لرطوبة التربة، درجة الحرارة، العناصر الغذائية؛ تُستخدم لتحسين الري وتخصيص الأسمدة.</li>
                            <li><strong>الماشية الذكية:</strong> أجهزة استشعار قابلة للارتداء تُراقب صحة الحيوانات وموقعها.</li>
                        </ul>
                    </li>
                    <li><strong>الرعاية الصحية الذكية (Smart Healthcare):</strong>
                        <ul>
                            <li><strong>المراقبة عن بُعد:</strong> أجهزة قابلة للارتداء ومستشعرات في المنزل تُراقب العلامات الحيوية للمرضى وترسل البيانات إلى الأطباء.</li>
                            <li><strong>إدارة الأدوية:</strong> أجهزة ذكية تُذكر المرضى بمواعيد تناول الأدوية.</li>
                        </ul>
                    </li>
                    <li><strong>الصناعة 4.0 والمصانع الذكية (Industry 4.0 & Smart Factories):</strong>
                        <ul>
                            <li><strong>الصيانة التنبؤية:</strong> مستشعرات على الآلات تُرسل بيانات عن حالتها للتنبؤ بالأعطال قبل حدوثها.</li>
                            <li><strong>مراقبة خطوط الإنتاج:</strong> تتبع المنتجات والعمليات لزيادة الكفاءة وتقليل الهدر.</li>
                        </ul>
                    </li>
                </ul>

                <h4>التوجهات المستقبلية في إنترنت الأشياء:</h4>
                <ul>
                    <li><strong>الجيل الخامس (5G) وتقنيات الاتصال المتقدمة:</strong> سيوفر 5G سرعات أعلى وزمن وصول أقل وقدرة على توصيل عدد أكبر بكثير من الأجهزة، مما يفتح آفاقًا جديدة لتطبيقات IoT.</li>
                    <li><strong>الحوسبة الطرفية (Edge Computing) والذكاء الاصطناعي على الجهاز (On-Device AI):</strong> معالجة المزيد من البيانات بالقرب من المصدر لتقليل زمن الوصول، وتحسين الخصوصية، وتقليل الاعتماد على السحابة المركزية.</li>
                    <li><strong>الأمان والخصوصية المعززين:</strong> مع تزايد عدد الأجهزة، يصبح الأمان أكثر أهمية. ستركز التطورات المستقبلية على بروتوكولات التشفير المحسنة، المصادقة القوية، وتصميم الأجهزة الآمنة.</li>
                    <li><strong>الاستدامة والطاقة الخضراء:</strong> تصميم أجهزة IoT موفرة للطاقة، واستخدام مصادر طاقة متجددة لتقليل البصمة الكربونية.</li>
                    <li><strong>التوأم الرقمي (Digital Twin):</strong> إنشاء نسخة افتراضية طبق الأصل من كائن مادي أو نظام، يتم تحديثها في الوقت الفعلي ببيانات من مستشعرات IoT. تُستخدم للمحاكاة، الاختبار، والتنبؤ بالأداء.</li>
                    <li><strong>البلوك تشين (Blockchain) في IoT:</strong> استخدام البلوك تشين لتأمين المعاملات بين أجهزة IoT، وتحسين الشفافية، وبناء الثقة في الشبكات اللامركزية.</li>
                </ul>
            `,
            en: `
                <h3>IoT in Practice & Future Trends:</h3>
                <p>The Internet of Things is rapidly evolving, with many practical applications and future trends shaping its development.</p>
                <h4>Practical Examples of IoT Applications:</h4>
                <ul>
                    <li><strong>Smart Cities:</strong>
                        <ul>
                            <li><strong>Smart Traffic Management:</strong> Sensors monitor traffic flow, sending data to optimize traffic lights and route vehicles.</li>
                            <li><strong>Waste Management:</strong> Sensors in waste bins report when they are full, optimizing collection schedules.</li>
                            <li><strong>Air Quality Monitoring:</strong> Sensors monitor pollution levels, providing data to citizens and authorities.</li>
                        </ul>
                    </li>
                    <li><strong>Smart Agriculture:</strong>
                        <ul>
                            <li><strong>Soil and Crop Monitoring:</strong> Sensors for soil moisture, temperature, nutrients; used to optimize irrigation and customize fertilization.</li>
                            <li><strong>Smart Livestock:</strong> Wearable sensors monitor animal health and location.</li>
                        </ul>
                    </li>
                    <li><strong>Smart Healthcare:</strong>
                        <ul>
                            <li><strong>Remote Monitoring:</strong> Wearable devices and in-home sensors monitor patients' vital signs and transmit data to doctors.</li>
                            <li><strong>Medication Management:</strong> Smart devices remind patients to take their medications.</li>
                        </ul>
                    </li>
                    <li><strong>Industry 4.0 & Smart Factories:</strong>
                        <ul>
                            <li><strong>Predictive Maintenance:</strong> Sensors on machinery send data about their condition to predict failures before they occur.</li>
                            <li><strong>Production Line Monitoring:</strong> Tracking products and processes to increase efficiency and reduce waste.</li>
                        </ul>
                    </li>
                </ul>

                <h4>Future Trends in IoT:</h4>
                <ul>
                    <li><strong>5G and Advanced Connectivity:</strong> 5G will offer higher speeds, lower latency, and the capacity to connect many more devices, opening new avenues for IoT applications.</li>
                    <li><strong>Edge Computing and On-Device AI:</strong> Processing more data closer to the source to reduce latency, improve privacy, and lessen reliance on centralized cloud.</li>
                    <li><strong>Enhanced Security and Privacy:</strong> As the number of devices grows, security becomes even more critical. Future developments will focus on improved encryption protocols, stronger authentication, and secure device design.</li>
                    <li><strong>Sustainability and Green Energy:</strong> Designing energy-efficient IoT devices and utilizing renewable energy sources to reduce carbon footprint.</li>
                    <li><strong>Digital Twin:</strong> Creating a virtual replica of a physical object or system, updated in real-time with data from IoT sensors. Used for simulation, testing, and performance prediction.</li>
                    <li><strong>Blockchain in IoT:</strong> Using blockchain to secure transactions between IoT devices, improve transparency, and build trust in decentralized networks.</li>
                </ul>
            `
        },
        quiz: [
            { question: "Which of these is a practical application of IoT in Smart Cities?", options: ["Manual traffic control", "Smart Traffic Management and Waste Management", "Offline data storage", "Traditional paper maps"], answer: 1, hint: "تستخدم أجهزة الاستشعار لتحسين إدارة موارد المدينة." },
            { question: "What is 'Predictive Maintenance' in Industry 4.0?", options: ["Repairing machines only after they break down", "Using sensors to predict equipment failures before they occur", "Manual inspection of all machinery daily", "Ignoring machine health until a major problem arises"], answer: 1, hint: "الهدف هو التنبؤ بالمشكلات لتجنب التوقفات غير المخطط لها." },
            { question: "Which future trend in IoT will provide higher speeds, lower latency, and capacity for many more devices?", options: ["Wi-Fi 4", "Bluetooth 2.0", "5G connectivity", "NFC"], answer: 2, hint: "الجيل الخامس من الاتصالات الخلوية سيحدث ثورة في قدرات إنترنت الأشياء." },
            { question: "What is the main benefit of 'Edge Computing' in future IoT systems?", options: ["Increasing data transfer to the cloud", "Reducing latency and improving privacy by processing data closer to the source", "Eliminating the need for any processing", "Making devices larger and more expensive"], answer: 1, hint: "يجلب الذكاء والمعالجة إلى حافة الشبكة." },
            { question: "Creating a virtual replica of a physical object or system, updated in real-time with IoT data, is known as:", options: ["Virtual Reality", "Augmented Reality", "Digital Twin", "Simulation Model"], answer: 2, hint: "النموذج الرقمي المتطابق يسمح بالمراقبة والتحليل والتنبؤ." },
            { question: "In Smart Agriculture, what do soil moisture sensors help optimize?", options: ["Animal health", "Building temperature", "Irrigation and fertilization", "Traffic flow"], answer: 2, hint: "تساعد المزارعين على استخدام الموارد بكفاءة أكبر." },
            { question: "Remote patient monitoring in Smart Healthcare relies on:", options: ["Only hospital visits", "Wearable devices and in-home sensors", "Manual data entry by nurses", "Traditional paper charts"], answer: 1, hint: "تسمح بمراقبة صحة المرضى من منازلهم." },
            { question: "Which future trend focuses on designing energy-efficient IoT devices and using renewable energy sources?", options: ["Enhanced Security", "Digital Twin", "Sustainability and Green Energy", "Blockchain in IoT"], answer: 2, hint: "يهدف إلى تقليل الأثر البيئي لإنترنت الأشياء." },
            { question: "How can Blockchain potentially benefit IoT?", options: ["By speeding up data processing on individual sensors", "By increasing data storage costs", "By securing transactions, improving transparency, and building trust in decentralized networks", "By replacing physical devices with virtual ones"], answer: 2, hint: "يوفر سجلًا غير قابل للتغيير ومعاملات آمنة." },
            { question: "What is a key focus of 'Enhanced Security and Privacy' in future IoT trends?", options: ["Ignoring data encryption", "Using weaker passwords", "Improved encryption protocols, stronger authentication, and secure device design", "Collecting more unnecessary data"], answer: 2, hint: "مع نمو إنترنت الأشياء، تصبح حماية البيانات والأجهزة أكثر أهمية." },
            { question: "Which IoT application focuses on optimizing traffic management and waste collection?", options: ["Smart Homes", "Smart Agriculture", "Smart Cities", "Smart Healthcare"], answer: 2, hint: "تستهدف تحسين البنية التحتية الحضرية والخدمات." },
            { question: "What is 'On-Device AI' in the context of future IoT?", options: ["AI that runs only in the cloud", "AI that requires large data centers", "Lightweight ML models running directly on microcontrollers", "AI that is managed entirely by humans"], answer: 2, hint: "يجلب قدرات الذكاء الاصطناعي إلى أصغر الأجهزة الطرفية." },
            { question: "Monitoring animal health and location using wearable sensors is an application in:", options: ["Smart Manufacturing", "Smart Livestock (Smart Agriculture)", "Smart Retail", "Smart Transportation"], answer: 1, hint: "تساعد في تحسين إدارة المزارع ورعاية الحيوانات." },
            { question: "What is the primary goal of Production Line Monitoring in Smart Factories?", options: ["To increase human labor", "To reduce efficiency and increase waste", "To track products and processes to increase efficiency and reduce waste", "To slow down production"], answer: 2, hint: "الهدف هو تحسين العمليات الصناعية." },
            { question: "Which of these is NOT a current or future trend in IoT?", options: ["5G connectivity", "Digital Twin", "Complete removal of all human interaction", "Blockchain in IoT"], answer: 2, hint: "التفاعل البشري سيبقى دائمًا جزءًا من معظم أنظمة IoT، حتى لو أصبحت أكثر أتمتة." },
            { question: "The increased capacity to connect a vastly larger number of devices is a benefit of:", options: ["Wi-Fi 6", "Bluetooth 5.0", "5G networks", "NFC technology"], answer: 2, hint: "5G مصمم لدعم كثافة أجهزة إنترنت الأشياء على نطاق واسع." },
            { question: "What is the advantage of using a Digital Twin for a physical asset?", options: ["It replaces the need for the physical asset", "It allows for real-time monitoring, simulation, and predictive analysis without affecting the real asset", "It only stores historical data", "It complicates maintenance processes"], answer: 1, hint: "يوفر بيئة افتراضية للاختبار والتحسين." },
            { question: "In terms of energy, future IoT devices will aim to be:", options: ["More power-hungry", "Less energy-efficient", "Self-powered or use renewable sources more", "Dependent on constant wired power"], answer: 2, hint: "الاستدامة هي هدف رئيسي لتقليل البصمة البيئية." },
            { question: "What role might Blockchain play in securing data provenance in IoT?", options: ["It will replace all traditional databases", "It can create an immutable and transparent record of data transactions and origins", "It will speed up centralized data processing", "It will only be used for cryptocurrency payments between devices"], answer: 1, hint: "سجل البلوك تشين اللامركزي والمشفّر يمكن أن يضمن مصداقية البيانات." },
            { question: "Which of the following is an example of an IoT application in healthcare?", options: ["Smart irrigation systems", "Traffic light optimization", "Wearable health monitors", "Automated factory robots"], answer: 2, hint: "أجهزة تتبع الصحة القابلة للارتداء هي مثال مباشر في الرعاية الصحية." },
        ]
    },
    // Adding the "Exams" category for Midterm and Final
    {
        id: "E1",
        title: "Midterm Exam (Model A) - مراجعة منتصف الفصل (نموذج أ)",
        icon: "fa-file-alt",
        summary: {
            ar: `
                <h3>امتحان منتصف الفصل الدراسي (نموذج أ)</h3>
                <p>يحتوي هذا القسم على أسئلة من امتحان منتصف الفصل الدراسي السابق لمساعدتك في المراجعة والاستعداد. تشمل الأسئلة الموضوعات التي تم تناولها في المحاضرات والدروس التعليمية الأولى.</p>
                <p><strong>ملاحظة:</strong> تم دمج بعض هذه الأسئلة ضمن الدروس التعليمية ذات الصلة. هذا القسم يجمعها في مكان واحد للمراجعة الشاملة.</p>
            `,
            en: `
                <h3>Midterm Exam (Model A)</h3>
                <p>This section contains questions from a previous midterm exam to help you review and prepare. The questions cover topics from the initial lectures and tutorials.</p>
                <p><strong>Note:</strong> Some of these questions have been integrated into their relevant tutorials. This section compiles them in one place for comprehensive review.</p>
            `
        },
        quiz: [
            // Questions from IoT Midterm Exam Model (A) .pdf
            { question: "IoT stands for", options: ["Introduction of Things", "Internet of Tracking", "Internet of Things", "Interaction of Things"], answer: 2, hint: "الاسم الكامل للمصطلح." },
            { question: "Sensor is an IoT component of a machine that is responsible for moving and controlling a system", options: ["True", "False"], answer: 1, hint: "المحرك (Actuator) هو المسؤول عن الحركة والتحكم." },
            { question: "is an important IoT component for collecting live data from the surrounding environment.", options: ["Power supply", "Actuator", "Hub", "Sensor"], answer: 3, hint: "المستشعرات هي التي تجمع البيانات من البيئة." },
            { question: "In order to set all pins of port A as output pins, register DDRA has to be:", options: ["0x00", "0x11", "0xF0", "0xFF"], answer: 3, hint: "0xFF = 11111111 ثنائيًا، مما يعني تعيين جميع الدبابيس كمخرجات." },
            { question: "provides user interfaces and functionalities that enable users to access and control IoT devices.", options: ["Processing layer", "Network layer", "Application layer", "Sensing layer"], answer: 2, hint: "طبقة التطبيقات هي الواجهة التي يتعامل معها المستخدم." },
            { question: "Pull-up resistor is used to ensure that input always reads LOW when it is not driven by any external input.", options: ["True", "False"], answer: 1, hint: "مقاومة الرفع (pull-up) تضمن قراءة HIGH، بينما مقاومة السحب (pull-down) تضمن قراءة LOW." },
            { question: "An Atmega16 is running with 5 MHz CPU clock. How many instructions are executed 6 msec?", options: ["4000", "3000", "2500", "2000"], answer: 2, hint: "راجع هذا السؤال في Tutorial 1." },
            { question: "Pull-up resistor is used to ensure that input always reads LOW when it is not driven by any external input.", options: ["True", "False"], answer: 1, hint: "تمت معالجة هذا السؤال مسبقًا، وإجابته هي False لأن Pull-up يضمن HIGH." },
        ]
    },
    {
        id: "E2",
        title: "Midterm Exam (Model B) - مراجعة منتصف الفصل (نموذج ب)",
        icon: "fa-file-alt",
        summary: {
            ar: `
                <h3>امتحان منتصف الفصل الدراسي (نموذج ب)</h3>
                <p>هذا القسم يقدم لك أسئلة إضافية من نموذج امتحان منتصف الفصل الدراسي آخر لتعزيز فهمك للمفاهيم واختبار معرفتك.</p>
                <p><strong>ملاحظة:</strong> تم دمج بعض هذه الأسئلة ضمن الدروس التعليمية ذات الصلة. هذا القسم يجمعها في مكان واحد للمراجعة الشاملة.</p>
            `,
            en: `
                <h3>Midterm Exam (Model B)</h3>
                <p>This section provides additional questions from another midterm exam model to reinforce your understanding of concepts and test your knowledge.</p>
                <p><strong>Note:</strong> Some of these questions have been integrated into their relevant tutorials. This section compiles them in one place for comprehensive review.</p>
            `
        },
        quiz: [
            // Questions from IoT Midterm Exam Model (B) .pdf
            { question: "Which of the following is not a benefit of IoT in smart cities?", options: ["Improved traffic flow", "Reduced energy consumption", "Increased public safety", "Increased air pollution"], answer: 3, hint: "تلوث الهواء هو نتيجة سلبية، وليس فائدة." },
            { question: "In order to Configure nth pin of PORTC as pullup when DDRC.n = 0?", options: ["PORTC.n = 1", "PORTC.n = 0xFF", "PORTC.n = 0", "PORTC.n = 0x01"], answer: 0, hint: "لتفعيل المقاومة الرافعة الداخلية على دبوس مُعد كمدخل، يتم كتابة 1 في البت المقابل في سجل PORT." },
            { question: "Pull-down resistor is used to ensure that input always reads LOW when it is not driven by any external input.", options: ["True", "False"], answer: 0, hint: "مقاومة السحب (pull-down) تضمن أن المدخل يقرأ LOW عند عدم وجود إشارة نشطة." },
            { question: "Which of the following statements are correct?", options: ["PIN register is used to bring data into CPU from pins.", "PORT register of a port is used to control the direction of a port.", "DDR register is used to send data out to pins.", "All of the mentioned"], answer: 0, hint: "سجل PIN يُستخدم لقراءة المدخلات." },
            { question: "In order to set all pins of port A as input pins, register DDRA has to be:", options: ["0x00", "0x11", "0xF0", "0xFF"], answer: 0, hint: "0x00 = 00000000 ثنائيًا، مما يعني تعيين جميع الدبابيس كمدخلات." },
            { question: "is an important IoT component for collecting live data from the surrounding environment.", options: ["Power supply", "Actuator", "Hub", "Sensor"], answer: 3, hint: "المستشعر هو الجهاز الذي 'يشم' أو 'يسمع' أو 'يشعر' بالبيئة." },
            { question: "provides user interfaces and functionalities that enable users to access and control IoT devices.", options: ["Processing layer", "Network layer", "Application layer", "Sensing layer"], answer: 2, hint: "طبقة التطبيقات هي الواجهة النهائية للمستخدم." },
            { question: "Set lower nibble of port B as output and higher nibble as input, DDRB has to be", options: ["0xF1", "0x0F", "0xF0", "0x11"], answer: 1, hint: "0x0F = 00001111 ثنائيًا، مما يعني تعيين الجزء السفلي كمخرج والجزء العلوي كمدخل." },
            { question: "layer of IoT architecture is responsible for providing connectivity between devices.", options: ["Processing", "Sensor", "Application", "Network"], answer: 3, hint: "طبقة الشبكة هي المسؤولة عن ربط الأجهزة ببعضها وبالإنترنت." },
            { question: "Network layer is the first layer of the IoT architecture and is responsible for collecting data from different sources.", options: ["True", "False"], answer: 1, hint: "طبقة الإدراك/الاستشعار هي الطبقة الأولى، وهي المسؤولة عن جمع البيانات." },
        ]
    },
    {
        id: "E3",
        title: "Final Exam 2022 - مراجعة الامتحان النهائي 2022",
        icon: "fa-file-alt",
        summary: {
            ar: `
                <h3>امتحان نهائي 2022</h3>
                <p>يحتوي هذا القسم على أسئلة من الامتحان النهائي لعام 2022 لتساعدك على التحضير الشامل للامتحان النهائي. تغطي الأسئلة مجموعة واسعة من المواضيع التي تمت دراستها خلال الفصل الدراسي.</p>
                <p><strong>ملاحظة:</strong> تم دمج بعض هذه الأسئلة ضمن الدروس التعليمية ذات الصلة. هذا القسم يجمعها في مكان واحد للمراجعة الشاملة.</p>
            `,
            en: `
                <h3>Final Exam 2022</h3>
                <p>This section contains questions from the 2022 final exam to help you prepare comprehensively for your final assessment. The questions cover a wide range of topics studied throughout the course.</p>
                <p><strong>Note:</strong> Some of these questions have been integrated into their relevant tutorials. This section compiles them in one place for comprehensive review.</p>
            `
        },
        quiz: [
            // Questions from IoT Final Exam 2022.pdf that are not already integrated or are general
            { question: "Which of the following is not a benefit of IoT in smart cities?", options: ["Improved traffic flow", "Reduced energy consumption", "Increased public safety", "Increased air pollution"], answer: 3, hint: "تلوث الهواء هو من الآثار السلبية المحتملة، وليس فائدة." },
            { question: "What is natural language processing?", options: ["The ability of machines to understand and interpret human language", "The ability of machines to perform tasks without human intervention", "The ability of machines to store and analyze data", "The ability of machines to visualize data"], answer: 0, hint: "معالجة اللغة الطبيعية (NLP) هي فرع من الذكاء الاصطناعي يركز على تفاعل الحاسوب مع اللغة البشرية." },
            { question: "IoT stands for", options: ["Introduction of Things", "Internet of Tracking", "Internet of Things", "Interaction of Things"], answer: 2, hint: "تمت معالجة هذا السؤال مسبقًا في Midterm Model A." },
            { question: "What is the component of an IoT system that executes a program?", options: ["A digital to analog converter", "An actuator", "A microcontroller"], answer: 2, hint: "تمت معالجة هذا السؤال مسبقًا في Midterm Model A." },
            { question: "Pull-down resistor is used to ensure that input always reads LOW when it is not driven by any external input.", options: ["True", "False"], answer: 0, hint: "تمت معالجة هذا السؤال مسبقًا في Midterm Model B." },
            { question: "contains information of result of most recent ALU operation", options: ["Stack pointer", "Status register", "Program counter"], answer: 1, hint: "سجل الحالة (Status register) يحتوي على أعلام (flags) تعكس نتائج العمليات الحسابية والمنطقية." },
            { question: "The pipelining technique allows the processor to work on only one step of instruction", options: ["True", "False"], answer: 1, hint: "تقنية الأنابيب (Pipelining) تسمح للمعالج بالعمل على عدة مراحل من التعليمات في نفس الوقت لتحسين الأداء." },
        ]   
    }

    
];
