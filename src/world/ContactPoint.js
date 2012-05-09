/**
 * @class ContactPoint
 * @brief A representation of a contact point between two bodies. Should be generated by the ContactGenerator
 * @param CANNON.RigidBody bi
 * @param CANNON.RigidBody bj
 * @param CANNON.Vec3 ri Optional. The vector from the center of mass of bi to the contact.
 * @param CANNON.Vec3 rj Optional. The vector from the center of mass of bj to the contact.
 * @param CANNON.Vec3 ni Optional. Contact normal vector, pointing out of body bi.
 */
CANNON.ContactPoint = function(bi,bj,ri,rj,ni){
    if(!(bi instanceof CANNON.RigidBody) || !(bj instanceof CANNON.RigidBody))
	throw new Error("Arguments 1 and 2 must be instances of CANNON.RigidBody.");
    
    /**
     * @property CANNON.Vec3 ri
     * @memberof CANNON.ContactPoint
     */
    this.ri = new CANNON.Vec3();

    /**
     * @property CANNON.Vec3 rj
     * @memberof CANNON.ContactPoint
     */
    this.rj = new CANNON.Vec3();

    /**
     * @property CANNON.Vec3 ni
     * @memberof CANNON.ContactPoint
     */
    this.ni = new CANNON.Vec3();
    
    // Copy over data if arguments were passed
    if(ri) ri.copy(this.ri);
    if(rj) rj.copy(this.rj);
    if(ni) ni.copy(this.ni);
    
    /**
     * @property CANNON.RigidBody bi
     * @memberof CANNON.ContactPoint
     */
    this.bi = bi;

    /**
     * @property CANNON.RigidBody bj
     * @memberof CANNON.ContactPoint
     */
    this.bj = bj;
};