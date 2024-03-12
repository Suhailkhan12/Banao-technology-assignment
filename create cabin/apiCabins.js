import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  let { data: cabin, error } = await supabase.from("cabin").select("*");

  if (error) {
    console.error(error);
    throw new Error("cabins could not loaded");
  }

  return cabin;
}

export async function createEditCabin(newCabin, id) {
  // https://aenjaawcfisrprfjgftx.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );

  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
  // 1.Create Cabin
  //.from is Table Name
  let query = supabase.from("cabin");

  //A Create
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

  //B Edit
  if (id) query = query.update({ ...newCabin, image: imagePath }).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("cabins could not create cabin");
  }

  //2. Upload Image
  //.from is bucket Name
  if (hasImagePath) return data; //for Duplicating Cabin

  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  //3. Delete the cabin If there is error in uploading image

  if (storageError) {
    await supabase.from("cabin").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error("cabin image could not be uploaded cabin was not created");
  }

  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabin").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("cabins could not deleted");
  }

  return data;
}
