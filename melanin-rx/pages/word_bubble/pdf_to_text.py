from pdfminer.high_level import extract_text

def extract_text_pdfminer(pdf_path):
    text = extract_text(pdf_path)
    return text

pdf_paths = ["/Users/khadi/Downloads/Wise-PrepregnancyBodySize-2010.pdf", "/Users/khadi/Downloads/0930299.pdf", "/Users/khadi/Downloads/1-s2.0-S0277953609002159-main.pdf", 
              "/Users/khadi/Downloads/lewis-et-al-2016-black-adolescent-females-perceptions-of-racial-discrimination-when-accessing-reproductive-and-general.pdf", 
               "/Users/khadi/Downloads/nihms-1620090.pdf", "/Users/khadi/Downloads/nihms-1631165.pdf", "/Users/khadi/Downloads/nihms-1640569.pdf", "/Users/khadi/Downloads/nihms-311873.pdf", 
               "/Users/khadi/Downloads/nihms-311873.pdf","/Users/khadi/Downloads/nihms19330.pdf", "/Users/khadi/Downloads/nihms627771.pdf", 
               "/Users/khadi/Downloads/Obesity Research - 2012 - Rosenberg - A Prospective Study of the Effect of Childbearing on Weight Gain in African‐American.pdf", 
                "/Users/khadi/Downloads/perceptions_of_racial_discrimination_and_the_risk.8.pdf", "/Users/khadi/Downloads/saluja-bryant-2021-how-implicit-bias-contributes-to-racial-disparities-in-maternal-morbidity-and-mortality-in-the.pdf", 
                "/Users/khadi/Downloads/whr.2021.0148.pdf", "/Users/khadi/Downloads/Wise-PrepregnancyBodySize-2010.pdf"]
all_texts = [extract_text_pdfminer(path) for path in pdf_paths]

for i, text in enumerate(all_texts):
    with open(f"extracted_text_{i}.txt", "w", encoding="utf-8") as f:
        f.write(text)