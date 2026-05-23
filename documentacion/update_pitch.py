"""
Actualiza simple_pitch_deck_flowlines_cumar.pptx con el alcance de la landing.
Cambios:
  - Slide 5  (AGENTES): agrega Francisco como agente SDR Outbound
  - Slide 8  (CASO DE USO - Comercio): actualiza al flujo Google Maps → Francisco → CRM
  - Slide 10 (BRAINIAC): mantiene + menciona Francisco
  - Slide 12 (MÓDULOS): alinea módulos / canales / integraciones con la landing
"""

import copy, re, shutil
from pptx import Presentation
from pptx.util import Pt
from pptx.dml.color import RGBColor

SRC  = "simple_pitch_deck_flowlines_cumar.pptx"
DST  = "simple_pitch_deck_flowlines_cumar_v2.pptx"

shutil.copy(SRC, DST)
prs = Presentation(DST)

# ── helpers ──────────────────────────────────────────────────────────────────

def first_text(slide):
    return " | ".join(
        tf.text.strip()
        for shape in slide.shapes
        if shape.has_text_frame
        for tf in [shape.text_frame]
        if tf.text.strip()
    )[:80]

def replace_in_shape(shape, old, new):
    """Reemplaza texto exacto conservando formato del primer run."""
    if not shape.has_text_frame:
        return False
    changed = False
    for para in shape.text_frame.paragraphs:
        full = "".join(r.text for r in para.runs)
        if old in full:
            # poner todo en el primer run y vaciar el resto
            new_full = full.replace(old, new)
            if para.runs:
                para.runs[0].text = new_full
                for r in para.runs[1:]:
                    r.text = ""
            changed = True
    return changed

def set_tf_text(shape, paragraphs_texts):
    """Reemplaza todo el text_frame con lista de strings (un párrafo c/u)."""
    if not shape.has_text_frame:
        return
    tf = shape.text_frame
    # tomar formato del primer párrafo existente como referencia
    ref_para = tf.paragraphs[0] if tf.paragraphs else None
    ref_run_fmt = None
    if ref_para and ref_para.runs:
        ref_run_fmt = ref_para.runs[0]

    # limpiar
    while len(tf.paragraphs) > 1:
        p = tf.paragraphs[-1]._p
        p.getparent().remove(p)

    for i, text in enumerate(paragraphs_texts):
        if i == 0:
            para = tf.paragraphs[0]
        else:
            para = tf.add_paragraph()
        para.clear()
        run = para.add_run()
        run.text = text
        if ref_run_fmt:
            run.font.size  = ref_run_fmt.font.size
            run.font.bold  = ref_run_fmt.font.bold
            run.font.color.rgb = RGBColor(0xFF, 0xFF, 0xFF) if ref_run_fmt.font.color and ref_run_fmt.font.color.type else None

def find_shapes_with(slide, *keywords):
    """Devuelve shapes cuyo texto contenga alguna keyword."""
    results = []
    for shape in slide.shapes:
        if shape.has_text_frame:
            t = shape.text_frame.text.lower()
            if any(k.lower() in t for k in keywords):
                results.append(shape)
    return results

# ── índice de slides (1-based en el PPTX, 0-based en python-pptx) ────────────
slides = prs.slides  # 0..14

# ============================================================
# SLIDE 5  — AGENTES, BOTS Y COPILOTOS
# Agregar Francisco como agente SDR Outbound con Google Maps
# ============================================================
s5 = slides[4]
print(f"Slide 5: {first_text(s5)[:60]}")

for shape in s5.shapes:
    if not shape.has_text_frame:
        continue
    t = shape.text_frame.text
    # Reemplazar la descripción del bloque "Ventas"
    if "Seguimiento, propuestas, publicaciones" in t:
        replace_in_shape(shape,
            "Seguimiento, propuestas, publicaciones y oportunidades.",
            "Seguimiento, propuestas, publicaciones y oportunidades.\n→ Francisco: SDR Outbound que califica prospectos de Google Maps por WhatsApp.")
    # Al final, reemplazar el párrafo del pie
    if "Los bots resuelven lo repetitivo" in t:
        replace_in_shape(shape,
            "Los bots resuelven lo repetitivo. Los humanos intervienen donde hay criterio, relación y decisiones importantes.",
            "Los bots resuelven lo repetitivo. Los humanos intervienen donde hay criterio. Los agentes con nombre (como Francisco) son el puente natural entre los dos mundos.")

# ============================================================
# SLIDE 8  — CASO DE USO: reemplazar por Francisco + Google Maps
# ============================================================
s8 = slides[7]
print(f"Slide 8: {first_text(s8)[:60]}")

for shape in s8.shapes:
    if not shape.has_text_frame:
        continue
    t = shape.text_frame.text
    if "Comercio conectado" in t:
        replace_in_shape(shape,
            "Comercio conectado: vender, cobrar y entregar sin perder contexto.",
            "Francisco en acción: de Google Maps al CRM sin intervención humana.")
    if "Simple puede llevar un producto" in t:
        replace_in_shape(shape,
            "Simple puede llevar un producto desde catálogo o conversación hasta publicación, venta, cobro, entrega y aprendizaje.",
            "Brainiac extrae negocios de Google Maps, los enriquece y se los entrega a Francisco. Francisco contacta por WhatsApp, califica con preguntas naturales y registra todo en el CRM automáticamente.")
    if "Imagen, texto, stock" in t:
        replace_in_shape(shape, "Imagen, texto, stock o catálogo.", "Google Maps")
        replace_in_shape(shape, "Producto", "Lead")
    if "Categoriza, sugiere precio" in t:
        replace_in_shape(shape,
            "Categoriza, sugiere precio y canal.",
            "Enriquece y prioriza el lead: rubro, ciudad, teléfono.")
    if "E-commerce, redes o marketplace" in t:
        replace_in_shape(shape, "E-commerce, redes o marketplace.", "WhatsApp → Francisco inicia la conversación.")
        replace_in_shape(shape, "Publica", "Contacta")
    if "Bot + humano atienden" in t:
        replace_in_shape(shape, "Bot + humano atienden y convierten.", "Francisco hace las preguntas de calificación.")
        replace_in_shape(shape, "Conversación", "Califica")
    if "Pago, logística y seguimiento" in t:
        replace_in_shape(shape, "Pago, logística y seguimiento.", "Lead calificado registrado en CRM con score automático.")
        replace_in_shape(shape, "Entrega", "CRM")
    if "Un equipo chico puede vender más canales" in t:
        replace_in_shape(shape,
            "Un equipo chico puede vender más canales con más consistencia y menos trabajo manual.",
            "Un SDR humano contacta ~50 leads/día. Francisco contacta 500+ con la misma calidad y consistencia, 24/7.")

# ============================================================
# SLIDE 12 — MÓDULOS VENDIBLES
# Actualizar módulos + agregar canales e integraciones reales
# ============================================================
s12 = slides[11]
print(f"Slide 12: {first_text(s12)[:60]}")

for shape in s12.shapes:
    if not shape.has_text_frame:
        continue
    t = shape.text_frame.text
    if "Ventas\nLeads, propuestas" in t or ("Ventas" in t and "Leads" in t):
        replace_in_shape(shape, "Leads, propuestas, publicaciones y seguimiento.", "Leads, propuestas, Francisco SDR, publicaciones.")
    if "Una misma capa de inteligencia" in t:
        replace_in_shape(shape,
            "Una misma capa de inteligencia para múltiples áreas de la empresa.",
            "Canales: WhatsApp · Instagram · Telegram · Email · SMS · Mercado Libre · Amazon · Correo Argentino · OCA · TikTok · LinkedIn\n"
            "Integraciones: Tango Gestión · VTEX · SAP · Salesforce · HubSpot · Mercado Libre · N8N · Make · Google Cloud\n"
            "Modelos IA: GPT-4o · Claude 3.7 · Gemini 2.0 · Grok 3 · Llama 3.3 · DeepSeek V3")

# ============================================================
# SLIDE 10 — BRAINIAC + ESPECIALISTAS
# Mencionar que alimenta a Francisco
# ============================================================
s10 = slides[9]
print(f"Slide 10: {first_text(s10)[:60]}")

for shape in s10.shapes:
    if not shape.has_text_frame:
        continue
    t = shape.text_frame.text
    if "Acciones\nRespuestas" in t or ("Acciones" in t and "Respuestas" in t):
        replace_in_shape(shape,
            "Respuestas, workflows, alertas y recomendaciones.",
            "Respuestas, workflows, alertas y entregas a agentes como Francisco.")
    if "En Simple, cada persona no solo usa IA" in t:
        replace_in_shape(shape,
            "En Simple, cada persona no solo usa IA: mejora la aplicación de IA.",
            "En Simple, Brainiac es el cerebro y los agentes (Francisco y otros) son los brazos. El equipo humano define las reglas y valida los resultados.")

# ── guardar ──────────────────────────────────────────────────────────────────
prs.save(DST)
print(f"\n✓ Guardado: {DST}")
