import os
from dotenv import load_dotenv
import openai

load_dotenv()

openai.api_key = os.getenv("OPEN_AI_API_KEY")

completion = openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages=[{"role": "user", "content": "Write an essay about penguins"}],
)

print(completion.choices[0].message.content)
