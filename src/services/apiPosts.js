import supabase, { supabaseUrl } from "./supabase";

//create post
export async function createPost(newPost) {
  const imageName = `${Math.random()}-${newPost.image.name}`.replaceAll(
    "/",
    ""
  );

  const imagePath = `${supabaseUrl}/storage/v1/object/public/post-images/${imageName}`;

  let query = supabase.from("post").insert([{ ...newPost, image: imagePath }]);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Post could not create cabin");
  }

  const { error: storageError } = await supabase.storage
    .from("post-images")
    .upload(imageName, newPost.image);

  if (storageError) {
    await supabase.from("post").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error("post image could not be uploaded post was not created");
  }

  return data;
}

// Post fetch
// export async function getPosts({ filter }) {
//   let { data: post, error } = await supabase.from("post").select(`
//   *,
//   profiles(
//     *
//   )
// `);

//   if (error) {
//     console.log(error);
//     throw new Error("post could not loaded");
//   }

//   return post;
// }

export async function getPosts({ filter }) {
  let query = supabase.from("post").select(`
  *,
  profiles(
    *
  )`);

  // FILTER
  if (filter) query = query[filter.method || "eq"](filter.field, filter.value);

  const { data: post, error } = await query;

  if (error) {
    console.log(error);
    throw new Error("post could not loaded");
  }

  return post;
}

// Post View update
export async function updateView(id, view) {
  const { data, error } = await supabase
    .from("post")
    .update({ views: view })
    .eq("id", id)
    .select();

  if (error) {
    console.log(error);
    throw new Error("post could not updated");
  }

  return data;
}

export async function getSinglePost(id) {
  const { data, error } = await supabase
    .from("post")
    .select("*, profiles(*)")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Booking not found");
  }

  return data;
}

export async function getrelatedPost(topic) {
  const { data, error } = await supabase
    .from("post")
    .select("*, profiles(*)")
    .eq("topic", topic);

  if (error) {
    console.error(error);
    throw new Error("Booking not found");
  }

  return data;
}

// export async function deleteCabin(id) {
//   const { data, error } = await supabase.from("cabin").delete().eq("id", id);

//   if (error) {
//     console.error(error);
//     throw new Error("cabins could not deleted");
//   }

//   return data;
// }
