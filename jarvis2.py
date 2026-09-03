tool_name, args, content, old, new, parse_error = parse_response(response) if parse_error: observation = f"Error: {parse_error} Please
respond again using the exact format from your instructions." elif tool_name not in TOOLS and tool_name not in ("write_file",
"edit_file"): observation = f"Error: Tool '{tool_name}' does not exist." else: # stuck-loop detection fingerprint = json.dumps({"tool":
tool_name, "args": args, "content": content, "old": old}, sort_keys=True, default=str) recent_fingerprints.append(fingerprint) if
len(recent_fingerprints) > STUCK_REPEAT_LIMIT: recent_fingerprints.pop(0) if len(recent_fingerprints) == STUCK_REPEAT_LIMIT and
len(set(recent_fingerprints)) == 1: print("\n❌ ABORTED: agent is repeating the same action, stopping to avoid an infinite loop.")
log_event({"goal": user_goal, "aborted": "stuck_loop"}) final_answer = "Task aborted: the agent got stuck repeating the same action."
break print(f"🔧 Executing Tool [{tool_name}]...") try: if tool_name == "write_file": observation =
write_file(filename=args.get("filename", ""), content=content) elif tool_name == "edit_file": observation =
edit_file(filename=args.get("filename", ""), old=old, new=new) else: observation = TOOLS[tool_name](**args) if isinstance(args, dict)
else TOOLS[tool_name](args) except Exception as e: observation = f"Error executing tool: {str(e)}" if len(observation) >
MAX_TOOL_OUTPUT_CHARS: observation = observation[:MAX_TOOL_OUTPUT_CHARS] + "\n...[TRUNCATED]..." print(f"👁 ️
Observation:\n{observation}") active_history += f"Observation: {observation}\n" log_event({"goal": user_goal, "step": step, "tool":
tool_name, "observation": observation[:1000]}) else: print(f"\n❌ Reached maximum step limit ({MAX_STEPS}) without resolving the
task.") log_event({"goal": user_goal, "stopped": "max_steps_reached"}) return final_answer