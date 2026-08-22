---
layout: default
title: Home
title_es: Inicio
sections:
  - name: Events
    name_es: Eventos
  - name: Parent Resources
    name_es: Recursos para familias
  - name: PTA
    name_es: PTA
---

{% assign resources = site.resources | sort: "order" %}

<section class="hero" aria-labelledby="welcome-heading">
  <p class="eyebrow"><span data-lang="en">Families, educators and community</span><span data-lang="es">Familias, educadores y comunidad</span></p>
  <h1 id="welcome-heading"><span data-lang="en">Welcome to Cheney Elementary PTA<sup>®</sup></span><span data-lang="es">Bienvenidos a Cheney Elementary PTA<sup>®</sup></span></h1>
  <p data-lang="en">Find useful school resources and simple ways to support every Cheney Elementary student.</p>
  <p data-lang="es">Encuentre recursos escolares útiles y maneras sencillas de apoyar a cada estudiante de Cheney Elementary.</p>
</section>

{% for section in page.sections %}
  <section class="resource-section">
    <h2>
      <span data-lang="en">{{ section.name }}</span>
      <span data-lang="es">{{ section.name_es | default: section.name }}</span>
    </h2>
    <ul class="resource-list" aria-label="{{ section.name }}">
      {% for resource in resources %}
        {% if resource.category == section.name %}
          {% assign external_url = resource.external_url | strip %}
          {% if external_url != "" %}
            {% assign resource_href = external_url %}
          {% else %}
            {% assign resource_href = resource.url | relative_url %}
          {% endif %}
          <li>
            <a class="resource-card" href="{{ resource_href }}">
              <strong data-lang="en">{{ resource.title }}</strong>
              <strong data-lang="es">{{ resource.title_es | default: resource.title }}</strong>
              {% if resource.description %}<small data-lang="en">{{ resource.description }}</small>{% endif %}
              {% if resource.description_es %}<small data-lang="es">{{ resource.description_es }}</small>{% endif %}
            </a>
          </li>
        {% endif %}
      {% endfor %}
    </ul>
  </section>
{% endfor %}
