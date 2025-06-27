CREATE TABLE neighborhoods (
  id INTEGER PRIMARY KEY,
  name TEXT,
  city TEXT,
  lifestyle TEXT
);

INSERT INTO neighborhoods (name, city, lifestyle)
VALUES
  ('Downtown', 'Metropolis', 'urban'),
  ('Suburbia', 'Metropolis', 'family'),
  ('Lakeview', 'Metropolis', 'nature');
