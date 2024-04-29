import Image from "next/image";
import Link from "next/link";
import '../app/globals.css';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
//import WordCloud from '../components/WordCloud';


function AboutPage() {
  const [words, setWords] = useState([]);

   useEffect(() => {
     // Assuming word_scores.json is stored in the public directory
    fetch('/word_scores.json')
      .then(response => response.json())
      .then(data => {
        const wordArray = Object.keys(data).map(key => ({
          text: key,
          value: data[key],
        })).slice(0, 30); // Get the top 30 words
        setWords(wordArray);
        console.log(wordArray);  // Log the data right after setting it
      });
  }, []);


  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Navbar */}
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <a href="/" className="flex items-center">
                {/* <Image
                  src="../logo.svg"
                  alt="MelaninRx Logo"
                  width={40}
                  height={40}
                /> */}
                <span className="ml-2 text-lg font-bold">MelaninRx</span>
              </a>
            </div>
            {/* Navbar links */}
            <div className="hidden md:block">
              <div className="flex space-x-4 items-center">
                <a href="/chatbot" className="text-white hover:bg-gray-700 px-3 py-2 mt-3 rounded-md text-sm font-medium">
                  Chatbot
                </a>
                <a href="/about" className="text-white hover:bg-gray-700 px-3 py-2 mt-3 rounded-md text-sm font-medium">
                  About the Issue
                </a>
                <a href="/resources" className="text-white hover:bg-gray-700 px-3 py-2 mt-3 rounded-md text-sm font-medium">
                  Health Analyst
                </a>
                <a href="/sources" className="text-white hover:bg-gray-700 px-3 py-2 mt-3 rounded-md text-sm font-medium">
                  Sources
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Main content with improved styling */}
      <main style={{ maxWidth: '1120px', margin: 'auto', padding: '4rem 1rem' }}>
  <div>
    {/* Main Header remains unchanged, assuming you want to keep its original style */}
    <h1 style={{ fontSize: '2.25rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '3rem' }}>About the Issue</h1>
    {/* Article section with text color adjustments */}
    <article>
      <section style={{ marginBottom: '2rem', fontSize: '1.125rem', lineHeight: '1.75rem', color: 'white' }}>
        <p>
        Bias in the medical field towards Black women is a significant and multifaceted issue, deeply rooted in historical, 
        societal, and institutional prejudices. It manifests in various forms, including disparities in treatment, diagnostic accuracy, 
        pain management, and overall quality of care. This issue is critical because it directly impacts the health outcomes and 
        quality of life for Black women, perpetuating a cycle of health inequity that has broader societal implications.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '1rem', color: '#A1887F' }}>Context on the Problem</h2>
        <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: 'white' }}>
        The bias against Black women in the medical field can be traced back to historical misbeliefs and stereotypes that persist today.
         These include erroneous assumptions about biological differences, pain tolerance, and even character traits, which can lead to 
         misdiagnoses, under-treatment of pain, and a general lack of empathy and understanding. Additionally, systemic racism and socioeconomic 
         factors contribute to these disparities by limiting access to quality care and health education.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '1rem', color: '#A1887F' }}>Statistics</h2>
        <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: 'white' }}>
        Statistical evidence highlights the gravity of this issue. For instance, Black women are more likely to experience higher mortality 
        rates associated with childbirth compared to their white counterparts. They also face higher rates of certain diseases like hypertension 
        and diabetes but often receive a lower standard of care. For example:
        </p>
        <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: 'white' }}>
        The maternal mortality rate for Black women is significantly higher than for white women. The exact figures can vary by region but often 
        show that Black women are two to six times more likely to die from pregnancy-related complications. Studies have shown that Black patients 
        are less likely than white patients to be given pain medications for the same conditions, indicating a systemic bias in pain management.
       </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '1rem', color: '#A1887F' }}>Why This Is an Important Issue</h2>
        <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: 'white' }}>
        Addressing bias in the medical field towards Black women is crucial for several reasons:
        </p>
        <ul style={{ listStyleType: 'disc', marginLeft: '1.5rem', fontSize: '1.125rem', lineHeight: '1.75rem', color: 'white' }}>
          <li> Everyone deserves equal access to quality healthcare. Reducing and eliminating racial bias is essential for achieving health equity across all populations.</li>
          <li>Improved Outcomes: Bias and discrimination in healthcare settings directly affect medical outcomes. By addressing these issues, it's possible to improve health outcomes for Black women.</li>
          <li>Trust in the Medical System: Experiencing or being aware of bias can lead to distrust in the healthcare system among Black communities, which in turn can lead to delays in seeking care or avoiding it altogether.</li>
          <li>Ethical Responsibility:The medical community has an ethical responsibility to provide care that is free from discrimination and bias. Addressing these issues is crucial to upholding the values of medical ethics.</li>
        </ul>
        <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: 'white' }}>
        Combatting bias requires comprehensive strategies, including education and training for healthcare providers on implicit bias, systemic 
        changes to ensure equitable access to care, and policies that address the social determinants of health. It's also vital to involve communities 
        in the conversation and decision-making processes to ensure solutions are effective and culturally sensitive.
        </p>
      </section>
    </article>
    {/* Placeholder for WordCloud component */}
    <div style={{ marginTop: '2rem' }}>
      {/*<WordCloud words={words} />*/}
    </div>
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <img src="Figure_1.png" alt="Word Bubble" style={{ maxWidth: '100%', height: 'auto' }} />
    </div>
    <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: 'white', textAlign: 'center'}}>
      Word Bubble presenting the most common information relating to Black womens' medical history in regards to pregnancy. We parsed through 15 research papers
      on the topic to find relevant information and accurate data on the subject. 
    </p>
  </div>
</main>



    </div>
  );
}

export default AboutPage;