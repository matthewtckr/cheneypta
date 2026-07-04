---
layout: default
title: Home
---

<section class="hero">
  <p class="eyebrow">Cheney Elementary PTA</p>
  <h1 data-lang="en">Parent Resources</h1>
  <h1 data-lang="es">Recursos para familias</h1>
  <p data-lang="en">Quick links for Cheney Elementary families and new parents.</p>
  <p data-lang="es">Enlaces rápidos para las familias de Cheney Elementary y familias nuevas.</p>
</section>

{% assign resources = site.resources | sort: "order" %}

{% assign sections = "Parent Resources|Essential Links|PTA" | split: "|" %}
{% for section in sections %}
  <section class="resource-section">
    <h2>
      <span data-lang="en">{{ section }}</span>
      <span data-lang="es">
        {% case section %}
          {% when "Parent Resources" %}Recursos para familias
          {% when "Essential Links" %}Enlaces esenciales
          {% when "PTA" %}PTA
          {% else %}{{ section }}
        {% endcase %}
      </span>
    </h2>
    <div class="resource-list" aria-label="{{ section }}">
      {% for resource in resources %}
        {% if resource.category == section %}
          <a class="resource-card" href="{{ resource.url | relative_url }}">
            <strong data-lang="en">{{ resource.title }}</strong>
            <strong data-lang="es">{{ resource.title_es | default: resource.title }}</strong>
            {% if resource.description %}<small data-lang="en">{{ resource.description }}</small>{% endif %}
            {% if resource.description_es %}<small data-lang="es">{{ resource.description_es }}</small>{% endif %}
          </a>
        {% endif %}
      {% endfor %}
    </div>
  </section>
{% endfor %}
