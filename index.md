---
layout: default
title: Home
---

<section class="hero">
  <p class="eyebrow">Cheney Elementary PTA</p>
  <h1>Family Resource Hub</h1>
  <p>Quick links, school resources, and PTA information for Cheney Elementary families.</p>
</section>

<section class="language-note">
  <strong>Español:</strong> Cada recurso puede incluir una traducción al español cuando esté disponible.
</section>

<section class="resource-list" aria-label="Parent resources">
  {% assign resources = site.resources | sort: "order" %}
  {% for resource in resources %}
    <a class="resource-card" href="{{ resource.url | relative_url }}">
      <span class="resource-icon" aria-hidden="true">{{ resource.icon }}</span>
      <span>
        <strong>{{ resource.title }}</strong>
        {% if resource.description %}<small>{{ resource.description }}</small>{% endif %}
      </span>
    </a>
  {% endfor %}
</section>
