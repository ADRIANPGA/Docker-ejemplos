import os

import streamlit as st
from langchain_community.llms import LlamaCpp

# Get n_gpu_layers and n_batch from os variables if present or use default values
n_ctx = int(os.getenv("N_CTX", 8192))
temperature = float(os.getenv("TEMPERATURE", 0.75))
top_p = float(os.getenv("TOP_P", 1.0))
max_tokens = int(os.getenv("MAX_TOKENS", 750))
use_mlock = bool(os.getenv("USE_MLOCK", True))
verbose = bool(os.getenv("VERBOSE", True))

# Print a JSON variable of mapped environment variables
print(
    {
        "N_CTX": n_ctx,
        "TEMPERATURE": temperature,
        "TOP_P": top_p,
        "MAX_TOKENS": max_tokens,
        "USE_MLOCK": use_mlock,
        "VERBOSE": verbose
    }
)

st.title('🦜 Chat formación contenedores')

llm = LlamaCpp(
    model_path="model.gguf",
    temperature=temperature,
    n_ctx=n_ctx,
    use_mlock=use_mlock,
    max_tokens=max_tokens,
    top_p=top_p,
    verbose=verbose
)

text = st.chat_input('Enter text:')
if text:
    message = st.chat_message('user')
    message.write(text)
    response = st.chat_message("assistant")
    response.write_stream(llm.stream(f'<|user|> {text} <|end|>\n<|assistant|>'))