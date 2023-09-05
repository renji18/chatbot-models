import os
from dotenv import load_dotenv
import openai

load_dotenv()

openai.api_key = os.getenv("OPEN_AI_API_KEY")

model_engine = "text-davinci-003"
prompt = "Talk to me like salmaan khan, tell me about narmada project in hinglish"
completion = openai.Completion.create(
    engine=model_engine, prompt=prompt, max_tokens=1024, n=1, stop=None, temperature=0.5
)
response = completion.choices[0].text
print(response)
