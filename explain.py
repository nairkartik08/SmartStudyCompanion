def get_ai_explanation(topic):
    topics = {
         # Mechanics
        "newton's first law": "Newton's First Law states that an object will remain at rest or move in a straight line unless acted upon by an external force.",
        "newton's second law": "Newton's Second Law explains how force is equal to mass times acceleration (F = ma).",
        "newton's third law": "Newton's Third Law states that every action has an equal and opposite reaction.",
        "force": "Force is a push or pull acting upon an object due to its interaction with another object.",
        "friction": "Friction is the resistance to motion of one object moving relative to another.",
        "acceleration": "Acceleration is the rate of change of velocity of an object with respect to time.",
        "momentum": "Momentum is the product of an object's mass and velocity. It is a vector quantity.",
        "inertia": "Inertia is the tendency of an object to resist any change in its motion.",
        "projectile motion": "Projectile motion is the motion of an object thrown into the air, subject only to gravity.",
        "circular motion": "Circular motion is when an object moves along a circular path at constant speed.",

        # Work, Power, Energy
        "work": "Work is done when a force is applied to an object and it moves. Work = Force × Distance.",
        "energy": "Energy is the capacity to do work. It exists in many forms such as kinetic and potential.",
        "power": "Power is the rate of doing work or the rate of energy transfer. Power = Work / Time.",
        "kinetic energy": "Kinetic energy is the energy of motion. KE = 0.5 × mass × velocity².",
        "potential energy": "Potential energy is stored energy due to an object's position or state.",

        # Heat and Thermodynamics
        "temperature": "Temperature is a measure of the average kinetic energy of the particles in a substance.",
        "heat": "Heat is energy transferred from one body to another due to a temperature difference.",
        "specific heat": "Specific heat is the amount of heat needed to raise the temperature of one gram of a substance by one degree Celsius.",
        "conduction": "Conduction is heat transfer through direct contact.",
        "convection": "Convection is heat transfer through fluid (liquid or gas) movement.",
        "radiation": "Radiation is heat transfer through electromagnetic waves without needing a medium.",
        "thermodynamics": "Thermodynamics is the study of energy, heat, and work. It includes laws governing energy conservation and entropy.",

        # Electricity and Magnetism
        "ohm's law": "Ohm's Law states that Voltage = Current × Resistance (V = IR).",
        "current": "Current is the flow of electric charge through a conductor.",
        "voltage": "Voltage is the potential difference that pushes electric charges to move in a circuit.",
        "resistance": "Resistance is the opposition to the flow of current in a circuit.",
        "series circuit": "In a series circuit, components are connected end-to-end, so current flows through each one in turn.",
        "parallel circuit": "In a parallel circuit, components are connected across the same voltage source.",
        "magnetic field": "A magnetic field is a region around a magnetic material within which magnetic force is exerted.",
        "electromagnetic induction": "Electromagnetic induction is the process of generating electric current with a changing magnetic field.",
        "transformer": "A transformer is a device that increases or decreases AC voltage using electromagnetic induction.",

        # Waves and Sound
        "wave": "A wave is a disturbance that transfers energy through a medium or space.",
        "frequency": "Frequency is the number of wave cycles per second, measured in Hertz (Hz).",
        "amplitude": "Amplitude is the height of a wave from its rest position.",
        "interference": "Interference is when two waves meet and combine to form a new wave.",
        "diffraction": "Diffraction is the bending of waves around obstacles or openings.",
        "reflection": "Reflection is when a wave bounces back after hitting a surface.",
        "refraction": "Refraction is the bending of a wave as it passes from one medium to another.",
        "longitudinal wave": "In a longitudinal wave, particles move parallel to the wave direction (e.g., sound waves).",
        "transverse wave": "In a transverse wave, particles move perpendicular to the wave direction (e.g., light waves).",

        # Light and Optics
        "light": "Light is electromagnetic radiation visible to the human eye.",
        "concave lens": "A concave lens is thinner at the center and diverges light rays outward.",
        "convex lens": "A convex lens is thicker at the center and converges light rays to a point.",
        "lens": "A lens is a piece of glass or plastic that refracts light to form an image.",
        "mirror": "A mirror reflects light to form an image.",
        "total internal reflection": "Total internal reflection occurs when a light ray reflects entirely within a medium instead of passing through the boundary.",
        "dispersion": "Dispersion is the splitting of white light into its component colors due to different refractive indices.",

        # Modern Physics
        "photoelectric effect": "The photoelectric effect is the emission of electrons from a material when light shines on it.",
        "nuclear fission": "Nuclear fission is the splitting of a heavy nucleus into two lighter nuclei, releasing energy.",
        "nuclear fusion": "Nuclear fusion is the combining of two light nuclei to form a heavier nucleus, releasing energy.",
        "radioactivity": "Radioactivity is the spontaneous emission of particles or energy from an unstable atomic nucleus.",
        "quantum physics": "Quantum physics deals with the behavior of particles at very small scales, where classical laws don't apply.",
        "relativity": "Relativity is Einstein's theory describing how time and space are linked for objects moving at constant speeds.",
        "planck's constant": "Planck's constant is a fundamental constant used in quantum mechanics, symbolized by h.",

        # Measurement & Units
        "scalar quantity": "A scalar quantity has only magnitude, like speed or temperature.",
        "vector quantity": "A vector quantity has both magnitude and direction, like velocity or force.",
        "displacement": "Displacement is the shortest distance from the initial to the final position, with direction.",
        "velocity": "Velocity is the speed of something in a given direction.",
        "speed": "Speed is the distance traveled per unit time, without considering direction.",
        "unit": "A unit is a standard quantity used to measure physical quantities (like meter, second, kg).",

        
    }

    # Case-insensitive search
    return topics.get(topic.lower(), "Sorry, I don't have an explanation for that topic.")
