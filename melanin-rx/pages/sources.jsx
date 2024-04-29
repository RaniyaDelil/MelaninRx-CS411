import Image from "next/image";
import Link from "next/link";
import '../app/globals.css';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';

function Sources() {
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
        <h1 style={{ fontSize: '2.25rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '3rem' }}>Citations</h1>
        {/* Article section with text color adjustments */}
        <article>
          <section style={{ marginBottom: '2rem', fontSize: '1.125rem', lineHeight: '1.75rem', color: 'white' }}>
            <p>
            Wise, Lauren A et al. “Prepregnancy body size, gestational weight gain, and risk of preterm birth in African-American women.” 
            Epidemiology (Cambridge, Mass.) vol. 21,2 (2010): 243-52. doi:10.1097/EDE.0b013e3181cb61a9
            </p>
          </section>
          <section style={{ marginBottom: '2rem', fontSize: '1.125rem', lineHeight: '1.75rem', color: 'white' }}>
            <p>
            Chambers, Brittany D et al. “Clinicians' Perspectives on Racism and Black Women's Maternal Health.” Women's health reports 
            (New Rochelle, N.Y.) vol. 3,1 476-482. 4 May. 2022, doi:10.1089/whr.2021.0148
            </p>
          </section>
          <section style={{ marginBottom: '2rem', fontSize: '1.125rem', lineHeight: '1.75rem', color: 'white' }}>
            <p>
            Saluja, Bani, and Zenobia Bryant. “How Implicit Bias Contributes to Racial Disparities in Maternal Morbidity and Mortality in the 
            United States.” Journal of women's health (2002) vol. 30,2 (2021): 270-273. doi:10.1089/jwh.2020.8874
            </p>
          </section>
          <section style={{ marginBottom: '2rem', fontSize: '1.125rem', lineHeight: '1.75rem', color: 'white' }}>
            <p>
            Rosenberg, Lynn et al. “Perceptions of racial discrimination and the risk of preterm birth.” Epidemiology (Cambridge, Mass.) 
            vol. 13,6 (2002): 646-52. doi:10.1097/00001648-200211000-00008
            </p>
          </section>
          <section style={{ marginBottom: '2rem', fontSize: '1.125rem', lineHeight: '1.75rem', color: 'white' }}>
            <p>
            Rosenberg, Lynn et al. “A prospective study of the effect of childbearing on weight gain in African-American women.”
            Obesity research vol. 11,12 (2003): 1526-35. doi:10.1038/oby.2003.204
            </p>
          </section>
          <section style={{ marginBottom: '2rem', fontSize: '1.125rem', lineHeight: '1.75rem', color: 'white' }}>
            <p>
            Black, Lora L et al. “The Relationship Between Perceived Racism/Discrimination and Health Among Black American Women: 
            a Review of the Literature from 2003 to 2013.” Journal of racial and ethnic health disparities vol. 2,1
            (2015): 11-20. doi:10.1007/s40615-014-0043-1
            </p>
          </section>
          <section style={{ marginBottom: '2rem', fontSize: '1.125rem', lineHeight: '1.75rem', color: 'white' }}>
            <p>
            Wise, Lauren A et al. “Reproductive factors, hormonal contraception, and risk of uterine leiomyomata in African-American women: 
            a prospective study.” American journal of epidemiology vol. 159,2 (2004): 113-23. doi:10.1093/aje/kwh016
            </p>
          </section>
          <section style={{ marginBottom: '2rem', fontSize: '1.125rem', lineHeight: '1.75rem', color: 'white' }}>
            <p>
            Yvette C et al. “A prospective study of reproductive factors in relation to risk of systemic lupus erythematosus among black women.” 
            Lupus vol. 30,2 (2021): 204-210. doi:10.1177/0961203320973074
            </p>
          </section>
          <section style={{ marginBottom: '2rem', fontSize: '1.125rem', lineHeight: '1.75rem', color: 'white' }}>
            <p>
            Creanga, Andreea A et al. “Racial and ethnic disparities in severe maternal morbidity: a multistate analysis, 2008-2010.” 
            American journal of obstetrics and gynecology vol. 210,5 (2014): 435.e1-8. doi:10.1016/j.ajog.2013.11.039
            </p>
          </section>
          <section style={{ marginBottom: '2rem', fontSize: '1.125rem', lineHeight: '1.75rem', color: 'white' }}>
            <p>
            Mehra, Renee et al. “Black Pregnant Women "Get the Most Judgment": A Qualitative Study of the Experiences of Black Women at the
             Intersection of Race, Gender, and Pregnancy.” Women's health issues : official publication of the Jacobs Institute of Women's Health vol. 
             30,6 (2020): 484-492. doi:10.1016/j.whi.2020.08.001
            </p>
          </section>
          <section style={{ marginBottom: '2rem', fontSize: '1.125rem', lineHeight: '1.75rem', color: 'white' }}>
            <p>
            Wise, Lauren A et al. “Prepregnancy body size, gestational weight gain, and risk of preterm birth in African-American women.” Epidemiology 
            (Cambridge, Mass.) vol. 21,2 (2010): 243-52. doi:10.1097/EDE.0b013e3181cb61a9
            </p>
          </section>
          <section style={{ marginBottom: '2rem', fontSize: '1.125rem', lineHeight: '1.75rem', color: 'white' }}>
            <p>
            Lewis,V.J., Mollen,C.J., Forke,C.M., Peter,N.G., Pati,S., Medina,S.P., & Johnson,S.E. (2016). 
            Black Adolescent Females' Perceptions of Racial Discrimination When Accessing Reproductive and General Health Care. Sage Open, 6(3).
             https://doi.org/10.1177/2158244016666605
            </p>
          </section>
          <section style={{ marginBottom: '2rem', fontSize: '1.125rem', lineHeight: '1.75rem', color: 'white' }}>
            <p>
            Palmer, Julie R et al. “Onset of natural menopause in African American women.” American journal of public health vol. 93,2 (2003): 299-306. 
            doi:10.2105/ajph.93.2.299
            </p>
          </section>
          <section style={{ marginBottom: '2rem', fontSize: '1.125rem', lineHeight: '1.75rem', color: 'white' }}>
            <p>
            Phillips, Ghasi S et al. “Income incongruity, relative household income, and preterm birth in the Black Women's Health Study.” 
            Social science & medicine (1982) vol. 68,12 (2009): 2122-8. doi:10.1016/j.socscimed.2009.03.039
            </p>
          </section>
    
        </article>
      </div>
    </main>
    </div>
      );
    }
    
  export default Sources;