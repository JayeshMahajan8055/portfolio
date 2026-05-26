Model compression and deployment checklist

1) Compress GLTF/GLB with Draco using gltf-pipeline:

- Install gltf-pipeline:
  npm install -g gltf-pipeline

- Compress:
  gltf-pipeline -i input.glb -o output_draco.glb -d

2) Alternative: use gltfpack (smaller output in many cases):

- Install gltfpack from https://github.com/zeux/meshoptimizer/releases
- Run:
  gltfpack -i input.glb -o output_draco.glb -c 128

3) Upload compressed models and HDRs to a CDN or Vercel static folder:

- Place `output_draco.glb` in `public/models/` or upload to external CDN (recommended).
- If using an external CDN, update loader URLs in `src/components/Character/utils/character.ts` to point to the CDN path.

4) Ensure `DRACOLoader` decoder files are served from `/draco/` (we already include `/public/draco/` decoders).

5) In code, use DRACOLoader with `loader.setDRACOLoader(dracoLoader);` (already present).

6) Verify locally with `npm run build` and `npm run preview` then check network & size in the browser devtools.

Optional: automate compression in CI using a script that runs `gltf-pipeline` or `gltfpack` and uploads artifacts to a storage bucket or CDN.
