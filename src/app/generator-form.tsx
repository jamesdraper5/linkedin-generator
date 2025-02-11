"use client";

import { createPostFromUrl } from "@/app/actions";
import { useActionState } from "react";

function SubmitButton({ isPending }: { isPending: boolean }) {
  return (
    <button type="submit" aria-disabled={isPending}>
      {isPending ? "Adding" : "Add"}
    </button>
  );
}

export default function GeneratorForm() {
  const [state, formAction, isPending] = useActionState(
    createPostFromUrl,
    null
  );
  return (
    <div>
      <form action={formAction}>
        <label htmlFor="url">Enter Blog Post URL</label>
        <input type="url" id="url" name="url" required />
        <SubmitButton isPending={isPending} />
        <p aria-live="polite" role="status">
          {state?.status}
        </p>
        <p aria-live="polite" role="status">
          {state?.data}
        </p>
      </form>
    </div>
  );
}
